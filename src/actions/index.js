//reduxでは'action'を返す'関数'のことを'actionCreator'と呼びます
//ここで定義したactionCreatorはViewを担当する
//コンポネント側で利用するため、exportしておく


export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const TIMES = 'TIMES'
//この文字列はreducerでも活用するの定義しておく
//複数の場所で活用されるデータについては一箇所で定義して
//それを再利用するのがプログラミングの鉄則である。


export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

export const times = () => ({
    type: TIMES
})

//ここでは、actionCreatorを定義しました。

//actionを定義してactionをリターンする関数、
//つまりactionCreatorを定義しました

//そしてactionCreatorをexportしました
//これは、のちにViewを担当するコンポーネント側でインポートして
//あるイベントを掴んだ時に当該のactionCreatorをインボークして
//適切な状態遷移を実行させるための仕組みを行なっていると理解しておくと良い。
