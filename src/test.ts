// 布尔类型(Boolean)
const Bln1: Boolean = true
const Bln2: Boolean = false

// 数字类型(Number)
const binaryLiteral: Number = 0b1010;    //二进制
const octalLiteral: Number = 0o744;      //八进制
const decLiteral: Number = 6;            //十进制
const hexLiteral: Number = 0xf00d;       //十六进制

//字符串类型(String)
const str1: String = `字符串模板`
const str2: String = '单引号'
const str3: String = "双引号"

//数组类型(Array)
const arr1: String[] = [`One`, 'Two', "Three"]
const arr2: Array<Number> = [1, 2, 3]
// 数组类型如果声明了数组元素的类型，那就只能放对应的类型，否则报错

//元组(也是数组类型之一)  TS中 单一元素类型的叫数组，多类型元素的叫元组
const arr3: [String, Number, Number, String] = ['One', 2, 3, 'a']
// 如果声明了多种类型，只能按照声明的顺序放元素，且元素数量要对等声明数量，否则报错

//枚举类型（不同于var、let等声明方式，枚举类型用enum定义）

