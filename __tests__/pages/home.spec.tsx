
import React from 'react';
import {it} from '@jest/globals';
import { fireEvent, render } from '@testing-library/react-native';
import { renderHook, act } from '@testing-library/react-hooks'

import { TasksProvider, useTaskList } from '../../src/context/TasksContext'
import { Home } from '../../src/pages/Home';
import mockAsyncStorage from '../../src/mocks/asyncStorageMock';

describe('Home page', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText} = render(<Home />);
    const inputNewTask = getByPlaceholderText('Nova tarefa ...')

    expect(inputNewTask).toBeDefined();
    expect(inputNewTask.props.placeholder).toBeTruthy();
  });

  it('verifica a insercao de um item na lista de tarefas', async () => {
    
    // const { getByPlaceholderText, getByTestId } = render(<Home />, {
    //   wrapper:TasksProvider,
    // });
    
    // const { result } = renderHook( () => useTaskList(), {
    //   wrapper:TasksProvider,
    // });
    
    // const inputNewTask = getByPlaceholderText('Nova tarefa ...');
    // const button = getByTestId('addButton');

    // const data = {id:'Task01', title: 'Task01'};

    // act(() => fireEvent.changeText(inputNewTask, data.title));    

    // act(async () => {
    //   await fireEvent.press(button);
    // });

    // expect(result.current.tasks).toBeTruthy();


  });
});
