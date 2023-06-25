import React, { useEffect, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Node, useReactFlow } from 'reactflow';

import { store } from '../store/store.js';
import { addEdge, addNode } from '../redux/actions.js';
import Checkbox from './Checkbox';
import './newChildNode.css';

const NewChildNode = () => {
  const [isCollapse, setIsCollapse] = useState(true);
  const [targetValue, setTargetValue] = useState('');
  const [currentNodeId, setCurrentNodeId] = useState('');
  const [nextNodeId, setNextNodeId] = useState('');

  const reactFlowInstance = useReactFlow();

  const variants: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const key: number = Math.floor(Math.random() * 999);

  let currentNumber: string;

  const lastNodeIndex: number = store.getState().nodes.length - 1;
  const nextEdge: [string, string] = [currentNodeId.toString(), nextNodeId.toString()];

  const onClick = (label: string) => {
    currentNumber = label.split(' ')[1];

    const newNode: Node | Node[] = {
      id: nextNodeId,
      position: {
        x: lastNodeIndex * 250,
        y: 180,
      },
      data: { label: <NewChildNode /> },
      style: {
        visibility: 'visible',
        minWidth: 200,
        minHeight: 140,
        backgroundColor: '#D1E7DD',
      },
    };
    setTargetValue((prevState) => currentNumber);

    reactFlowInstance.addNodes(newNode);
    store.dispatch(addNode(newNode, currentNumber));
    store.dispatch(addEdge(nextEdge));

    setTimeout(() => {
      setIsCollapse((prevState) => {
        return !prevState;
      });
    }, 500);
  };

  const isCollapsehandler = () => {
    setTimeout(() => {
      setIsCollapse((prevState) => {
        return !prevState;
      });
    }, 500);
  };
  useEffect(() => {
    setNextNodeId(Math.round(Math.random() * 999).toString());

    const { nodes } = store.getState();
    const currentNode = nodes[nodes.length - 1];

    setCurrentNodeId(currentNode?.id);

    if (currentNode?.currentNumber) {
      currentNumber = currentNode.currentNumber;
      setTargetValue(currentNumber);
    }
  }, [targetValue]);

  return (
    <div className="react-flow__node">
      <div className="react-screen"></div>
      <div className="react-select-container" onClick={isCollapsehandler}>
        Виберіть значення {targetValue}
        {isCollapse ? <BsChevronUp /> : <BsChevronDown />}
        <div className="react-select" style={{ display: `${isCollapse ? 'none' : 'flex'}` }}>
          {variants.map((item: number) => {
            return <Checkbox key={key + item} label={`Варіант ${item}`} onClick={onClick} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default NewChildNode;
