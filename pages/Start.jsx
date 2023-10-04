import { useState, useCallback } from "react"
import ReactFlow, { addEdge, applyNodeChanges, applyEdgeChanges } from 'reactflow'
import TextUpdaterNode from "./Start/TextUpdaterNode"

import 'reactflow/dist/style.css'
import './Start/text-updater-node.css'

const rfStyle = { backgroundColor: '#bfbfbf' }

const initialNodes = [
  {
    id: 'node-1',
    position: { x: 0, y: 0},
    data: { value: 123 },
    type: 'textUpdater',
  },
  {
    id: 'node-2',
    position: { x: 0, y: 200},
    targetPosition: 'left',
    data: { label: 'node 2' },
    type: 'output',
  },
  {
    id: 'node-3',
    position: { x: 200, y: 200},
    targetPosition: 'left',
    data: { label: 'node 3' },
    type: 'output',
  },
]

const initialEdges = [
  { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'a'},
  { id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'b'},
]

const nodeTypes = { textUpdater: TextUpdaterNode }

function Start() {

const [nodes, setNodes] = useState(initialNodes)
const [edges, setEdges] = useState(initialEdges)

const onNodesChange = useCallback(
  (changes) => setNodes((node) => applyNodeChanges(changes, node)), [setNodes]
)

const onEdgesChange = useCallback(
  (changes) => setEdges((edge) => applyEdgeChanges(changes, edge)), [setEdges]
)

const onConnect = useCallback((connection) => setEdges((edge) => addEdge(connection, edge)), [setEdges])

  return (
    <div style={{ height: 500 }}>
      <ReactFlow 
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        style={rfStyle}
      >
      </ReactFlow>
    </div>
  )
}
export default Start