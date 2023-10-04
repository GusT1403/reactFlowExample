import { useCallback, useState} from 'react'
import ReacFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background } from "reactflow"
import 'reactflow/dist/style.css'

import initialNodes from "./SubFlow/Nodes"
import initialEdges from "./SubFlow/Edges"

const rfStyle = { backgroundColor: '#d0c0f7'}

function SubFlow() {

  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onNodesChange = useCallback((changes) => {
    setNodes((node) => applyNodeChanges(changes, node))
  }, [setNodes])

  const onEdgesChange = useCallback((changes) => {
    setNodes((edge) => applyEdgeChanges(changes, edge))
  }, [setEdges])

  const onConnect = useCallback((connection) => {
    setEdges((edge) => addEdge(connection, edge))
  }, [setEdges])

  return (
    <div style={{ height: 800 }}>
      <ReacFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      style={rfStyle}
      attributionPosition='top-right'
    >
     <Background/> 
    </ReacFlow>
    </div>
  )
}

export default SubFlow
