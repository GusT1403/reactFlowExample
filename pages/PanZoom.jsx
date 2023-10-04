import { useCallback } from "react"
import ReactFlow, { addEdge, SelectionMode, useEdgesState, useNodesState } from "reactflow"
import 'reactflow/dist/style.css'

import initialNodes from './PanZoom/nodes'
import initialEdges from './PanZoom/edges'

const panOnDrag = [1, 2]

function PanZoom() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (connection) => {
      setEdges((edge) => addEdge(connection, edge))
    }, [setEdges]
  )

  return (
    <div style={{ height: 700 }}>
      <ReactFlow 
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        panOnScroll
        selectionOnDrag
        panOnDrag={panOnDrag}
        selectionMode={SelectionMode.Partial}
      ></ReactFlow>
    </div>
  )
}

export default PanZoom
