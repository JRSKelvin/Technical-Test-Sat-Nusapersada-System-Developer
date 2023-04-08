const blockCodeOneQuestionFirstPartA =
`// Block Query
SELECT * FROM TABLE_PR LEFT JOIN TABLE_PO ON TABLE_PR.ID = TABLE_PO.PR_ID LEFT JOIN TABLE_CER ON TABLE_PR.ID = TABLE_CER.PR.ID
// End Of Block Query`

const blockCodeOneQuestionFirstPartB =
`// Block Query
---
// End Of Block Query`

const blockCodeOneQuestionFirstPartC =
`// Block Query
---
// End Of Block Query`

const blockCodeOneQuestionTwoPartA =
`// Block Code
console.log(false == '0')
console.log(false === '0')

(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1, y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
// End Of Block Code`

const outputCodeOneQuestionTwoPartA =
`// Output Code
true
false
(function () {
  ^
  TypeError: console.log(...) is not a function
// End Of Output Code`

const blockCodeOneQuestionTwoPartB =
`// Block Code
function palindromeCheck(str) {
  var originalStr = str
  var reverseStr = originalStr.split('').reverse().join('');
  if (originalStr == reverseStr) {
    return true
  }
  return false
}
// End Of Block Code`

const blockCodeOneQuestionTwoPartC =
`// Block Code
document.getElementById
document.getElementsByClassName
document.getElementsByName
document.getElementsByTagName
document.getElementsByTagNameNS
document.querySelector
// End Of Block Code`

const blockCodeOneQuestionThreePartA =
`// Block Code (Kotlin)
fun main() {
  println(removeString('A', "ALPHABET"))
}

fun removeString(char: Char, str: String): String {
  val strSplit = str.toCharArray()
  val strRemove = strSplit.filter { strChar -> strChar != char }
  return strRemove.joinToString(separator = "")
}
// End Of Block Code`

const blockCodeOneQuestionThreePartB =
`// Block Code (Kotlin)
fun main() {
  println(palindromeCheck("12321"))
}

fun palindromeCheck(str: String): Boolean {
  val originalStr = str
  val reverseStr = originalStr.reversed()
  if (originalStr == reverseStr) {
    return true
  }
  return false
}
// End Of Block Code`

const blockCodeOneQuestionThreePartC =
`// Block Code (Kotlin)
fun main() {
  println(noRepeatString("ALPHABET"))
}

fun noRepeatString(str: String): Char? {
  val map = LinkedHashMap<Char, Int>()
  var noRepeatChar: Char? = null
  for (i in str.toCharArray()) {
    if (map.keys.contains(i)) {
      var x = map[i]
      map[i] = 1+x!!
    } else {
      map[i] = 1
    }
  }
  val filterMap = map.filter { (strKey, strValue) -> strValue == 1 }
  for (singleChar in filterMap.keys) {
    if (noRepeatChar == null) noRepeatChar = singleChar
    else break
  }
  return noRepeatChar
}
// End Of Block Code`

const blockCodeOneQuestionThreePartD =
`// Block Code (Kotlin)
fun main() {
  println(secondHighestNumber(arrayListOf(7, 6, 8, 5, 1, 3, 2, 4)))
}

fun secondHighestNumber(arr: ArrayList<Int>): Int {
  arr.sortDescending()
  var finalValue = -1
  if (arr.size > 1) {
    finalValue = arr[1]
  }
  return finalValue
}
// End Of Block Code`

const blockCodeOneQuestionFourPartA =
`// Block Code (Kotlin)
open class Person(_firstName: String) {
  val firstName: String = _firstName

  open fun getFullName(): String {
    return firstName
  }
}

class FullDataPerson(_firstName: String, _middleName: String, _lastName: String): Person(_firstName) {
  val middleName: String = _middleName
  val lastName: String = _lastName

  override fun getFullName(): String {
    return "$\{firstName} $\{middleName} $\{lastName}"
  }
}

fun main() {
  println(Person("Kelvin").getFullName())
  println(FullDataPerson("Kelvin", "Developer", "Sat").getFullName())
}
// End Of Block Code`

const blockCodeOneQuestionFourPartB =
`// Block Code (Kotlin)
data class Orders (
  var product: String,
  var qty: Int,
  var price: Int,
)

open class GoFood(_orders: MutableList<Orders>) {
  val orders: MutableList<Orders> = _orders

  open fun addOrder(newOrder: Orders) {
    orders.add(newOrder)
  }

  open fun getTransportFee(location: String): Int {
    if (location == "Pelita") return 5000
    else return 10000
  }

  open fun getTotalOrder(location: String, discountVoucher: Int): Int {
    var totalOrder = 0
    orders.forEach { its ->
      totalOrder += its.price * its.qty
    }
    val transportFee = this.getTransportFee(location)
    return (totalOrder + transportFee - discountVoucher)
  }
}

class GoFoodConvenience(_orders: MutableList<Orders>): GoFood(_orders) {
  override fun getTransportFee(location: String): Int {
    if (location == "Pelita") return 5000 + 3000
    else return 10000
  }
}

fun main() {
  val objectClass = GoFood(mutableListOf())
  objectClass.addOrder(Orders("Mie Ayam", 2, 15000))
  objectClass.addOrder(Orders("Teh O Beng", 2, 5000))
  println(objectClass.getTotalOrder("Pelita", 10000))
  val objectClassConvenience = GoFoodConvenience(mutableListOf())
  objectClassConvenience.addOrder(Orders("Mie Ayam", 2, 15000))
  objectClassConvenience.addOrder(Orders("Teh O Beng", 2, 5000))
  println(objectClassConvenience.getTotalOrder("Pelita", 10000))
}
// End Of Block Code`

const allTechnicalCode = {
  blockCodeOneQuestionFirstPartA,
  blockCodeOneQuestionFirstPartB,
  blockCodeOneQuestionFirstPartC,
  blockCodeOneQuestionTwoPartA,
  outputCodeOneQuestionTwoPartA,
  blockCodeOneQuestionTwoPartB,
  blockCodeOneQuestionTwoPartC,
  blockCodeOneQuestionThreePartA,
  blockCodeOneQuestionThreePartB,
  blockCodeOneQuestionThreePartC,
  blockCodeOneQuestionThreePartD,
  blockCodeOneQuestionFourPartA,
  blockCodeOneQuestionFourPartB,
}

export default allTechnicalCode
