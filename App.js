
//reducerは、アプリケーションで扱う状態の変更する責任を担うもの。
//そのreducerを元にstoreを作成する。
//そのstoreがアプリケーション内の全てのコンポーネントで使用できるようにする。
//'createStore'はstoreを作成するための関数
//'provider'は作成したstoreを全コンポーネントに渡すための機能のコンポーネント
//


import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import  reducer  from './src/reducers/index'
import Home from './src/components/home'

//createStoreの引数に'reducer'を渡す
//ここで作られるstoreはアプリケーション内で唯一のものになります。
//アプリケーション内の全てのstateはこのstoreに集約されている。

const store = createStore(reducer)


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
};