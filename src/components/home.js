





import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { connect } from 'react-redux'

import { increment, decrement, times, } from '../actions/index'

class Home extends React.Component {
    //constructor(props)メソッドはコンポーネントの初期化時に実行されるコールバック
    //そのコールバック内では状態を初期化してカウンターを'0'にしていたが
    //その働きはreduxにおいてはreducerで行うので'this.state = 0'はいらない。
  render() {
      //インスタンスの'props'には状態やactionを渡して行くので、propsを変数に入れておく
      const props = this.props
    return (
      <View style={styles.container}>
      {/* recucer内のカウントのオブジェクトのvalueの値になるので'props.value'を表示させる。 */}
        <Text>value: {props.value}</Text>
        {/* onPressに対応する、メソッドコール{props.increment}など */}
        <Button title='+1' onPress={props.increment}/>
        <Button title='-1' onPress={props.decrement}/>
        <Button title='*1' onPress={props.times}/>
        <Text onPress={props.increment}>+1</Text>
        <Text onPress={props.decrement}>-1</Text>
      </View>
    );
  }
}


//stateとactionをコンポーネントに関連ずける部分の実装

//'mapStateToProps'はstateの情報から、このコンポーネントで必要なものを取り出して、
//コンポーネントないのpropsとしてマッピングする機能を持つ関数です。
//引数には状態のトップレベルを示すstateを書いて、どういったオブジェクトをpropsとして対応させるのか
//ということを関数の戻り値としてい定義する。
//ここではカウンターの現在の値であるvalueを参照したいので、valueをキーにstate.count.value
//を値にもつオブジェクトを返す。
const mapStateToProps = state => ({ value: state.count.value })

//mapDispatchToPropsについて
//あるactionが発生した時にreducerにtypeに応じた状態遷移を実行させるための関数が'Dispatch'という
//このDispatch関数を引数において、このコンポーネントで必要となるdispatch関数を宣言する。
//ここでは
//<Button title='+1' onPress={props.increment}/>
//<Button title='-1' onPress={props.decrement}/>
//があるので、両方のボタンのクリック時に該当のアクションをdispatchに渡して、実行させることで
//状態遷移をさせることができる。

//例:incrementをキーにincrement関数を引数にもつdispatch関数を値に
//decrimentに関しても同じ。
//()=> これを書くことを「関数を渡すという」

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    times: () => dispatch(times()),
})
//const mapDispatchToProps = ({ increment, decrement })
//こういった書き方もできる。

//connect関数を使う。
export default connect (mapStateToProps, mapDispatchToProps)(Home)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


