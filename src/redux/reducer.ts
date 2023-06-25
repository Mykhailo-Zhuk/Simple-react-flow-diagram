import { initialNodes } from '../nodes';
import { AboutEdges, initialEdges } from '../edges';

const initialState = { nodes: [...initialNodes], edges: [...initialEdges] };

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_NODE': {
      let newCurrentNumber: string;

      const curNumber: string = action.currentNumber;
      const prevNode = state.nodes[state.nodes.length - 1];

      if (prevNode.currentNumber) {
        newCurrentNumber = prevNode.currentNumber + '-' + curNumber;
        const newNode = { ...action, currentNumber: newCurrentNumber };
        const nodes = state.nodes.concat([newNode]);

        return { ...state, nodes };
      }
      const nodes = state.nodes.concat([action]);

      return { ...state, nodes };
    }
    case 'ADD_EDGE': {
      const ids: string[] = action.ids;
      const joinIds: string = ids.join('-');
      const [source, target] = ids;

      const newEdge: AboutEdges = {
        id: joinIds,
        source,
        target,
        markerStart: 'myCustomSvgMarker',
        markerEnd: { type: 'arrow', color: 'black' },
      };
      const edges = state.edges.concat([newEdge]);

      return { ...state, edges };
    }

    default:
      return state;
  }
};
