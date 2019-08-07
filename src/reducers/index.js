//reducerは
//actionが発生した時に、actionに組み込まれている
//typeに応じて、状態をどう変化させるのかということを定義するのもの。
//ここでいう状態はstateという名称で扱っていきます。


//index.jsではアプリケーション内に存在する全ての'reducer'を総括する
//つまり、全reducerを全てのreducerに結合する役割をもつ
//その結合するための機能が、combineReducersです。

import { combineReducers } from 'redux'
import  count from './count'

//countをcombineReducersで結合する。
//また、あとでこの結合したものをインポートしてstoreを作成る際に
//使用するので、ここではexportしておく


export default combineReducers({ count })
//複数reducerが存在する場合は、引数に列挙すればいい
//export default combineReducers({ count, foo, var })など。。

