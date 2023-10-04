import ELK from "elkjs/lib/elk.bundled";
import React, { useCallback } from 'react'
import ReactFlow, { ReactFlowProvider, Panel, useNodesState, useEdgesState, useReactFlow } from "reactflow"

import { initialNodes, initialEdges } from "./Layouting/nodes-edges"
import 'reactflow/dist/style.css'

const elk = new ELK()

const useLayoutedElements = () => {
  const { getNodes, setNodes, getEdges, fitView } = useReactFlow()
  const defaultOptions = {
    'elk.algoritm': 'layered',
    'elk.layered.spacing.nodeNodeBetweenLayers': 100,
    'elk.spacing.nodeNode': 80,
  }
  const getLayoutedElements = useCallback((options) => {
    const layoutOptions = { ...defaultOptions, ...options }
    const graph = {
      id: 'root',
      layoutOptions: layoutOptions,
      children: getNodes(),
      edges: getEdges(),
    }

    elk.layout(graph).then(({ children }) => {
      children.forEach((node) => {
        node.position = { x: node.x, y: node.y }
      })

      setNodes(children)
      window.requestAnimationFrame(() => {
        fitView()
      })
    })
  }, [])
  return{ getLayoutedElements }
}

const getLayoutedElements = (nodes, edges) => {
  return { nodes, edges }
}

const Layouting = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const { getLayoutedElements } = useLayoutedElements()

  return (
    <div style={{ height: 700}}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Panel position="top-right">
          <button onClick={() => {
            getLayoutedElements({ 'elk.algorithm': 'layered', 'elk.direction': 'DOWN' })
          }}>Vertical layout</button>
          <button onClick={() => {
            getLayoutedElements({ 'elk.algorithm': 'layered', 'elk.direction': 'RIGHT' })
          }}>Horizontal layout</button>
          <button onClick={() => {
            getLayoutedElements({ 'elk.algorithm': 'org.eclipse.elk.radial', })
          }}>Radial layout</button>
          <button onClick={() => {
            getLayoutedElements({ 'elk.algorithm': 'org.eclipse.elk.force', })
          }}>Force layout</button>
        </Panel>
      </ReactFlow>
    </div>
  )
}

export default function () {
  return(
    <ReactFlowProvider>
      <Layouting/>
    </ReactFlowProvider>
  )
}
