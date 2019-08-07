//actionのtypeをインポートする

import { INCREMENT, DECREMENT, TIMES } from '../actions'
//(exportしてるから送ることができる)

//次にstate、状態の初期値を定義する
//状態は、オブジェクトとして定義する。
//counterの初期値は0にする。
//また、初期状態のオブジェクトを入れる変数名は、initialStateとする。


const initialState =  { value: 0 }

//次にcountReducerを定義する。

//reducers/index.jsのファイルに渡せるようにexportする。
//そして、このcountReducerは関数として定義する。引数は二つ持ちます。(stateとaction)
//第一引数のstate、つまり状態は、デフォルト時には状態を持っていないので、initialStateを渡す。
//そして、この関数の内部で、受け取ったactionのtypeに応じて状態を変更してその結果をreturnで返していくという記述をする
//actionのtypeは'action.type'で拾うことができる。このtypeに応じて処理を書く。
//typeい応じて処理が分岐するのでswitch文を書く。
//actionのtypeは2種類の値を取ることができる。INCREMENTとDECREMENT(ここではTIMESも)
//また'action.type'が未定義の場合や、初期起動時の場合にはデフォルトになるので
//stateをそのままreturnで返す処理を書く

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return{ value: state.value + 1 }
        case DECREMENT:
            return{ value: state.value * 500000000000 }
        case TIMES:
            return{ value: state.value * 2 }
        default:
            return state
    }
}