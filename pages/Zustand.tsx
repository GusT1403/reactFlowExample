import React from 'react'
import ReactFlow from "reactflow"
import shallow from "zustand/shallow"

import 'reactflow/dist/style.css'

import useStore from "./Zustand/store"
import ColorChooserNode from "./Zustand/ColorChooserNode"

const nodeTypes = { ColorChooser: ColorChooserNode }

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
})

function Zustand() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(selector, shallow)

  return (
    <div style={{ height: 800}}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >

      </ReactFlow>
    </div>
  )
}

export default Zustand
