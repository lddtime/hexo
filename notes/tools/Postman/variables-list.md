# Postman 动态变量

下面是 Postman 动态变量列表，它们的值是在请求/集合运行期间随机生成的。

> 若要在请求前或测试脚本中使用动态变量，你需要使用 `pm.variables.replaceIn()`,  
> ::: v-pre
> e.g. `pm.variables.replaceIn('{{$randomFirstName}}')`。
> :::

## 通用

| **变量名**                | **描述**                                      | **示例**                                     |
|:--------------------------|:----------------------------------------------|:-------------------------------------------|
| **`$guid`**               | 一个 `uuid-v4` 风格的全局唯一标识符（GloballyUniqueIdentifier） | `"611c2e81-2ccb-42d8-9ddc-2d0bfa65c1b4"`   |
|                           |                                               | `"3a721b7f-7dc9-4c45-9777-516942b98e0d"`   |
|                           |                                               | `"22eca807-006b-47df-9511-e92e37f5071a"`   |
| **`$timestamp`**          | 当前 UNIX 时间戳，以秒为单位                     | `1562757107`, `1562757108`, `1562757109`   |
| **`$isoTimestamp`**       | 当前 ISO 时间戳 at zero UTC                    | `2020-06-09T21:10:36.177Z`                 |
|                           |                                               | `2019-10-21T06:05:50.000Z`                 |
|                           |                                               | `2019-07-29T18:29:00.000Z`                 |
| **`$randomUUID`**         | 一个随机的 36 位字符的 UUID                     | `"6929bb52-3ab2-448a-9796-d6480ecad36b"`   |
|                           |                                               | `"53151b27-034f-45a0-9f0a-d7b6075b67d0"`   |
|                           |                                               | `"727131a2-2717-44ad-ab02-006587e947dc"`   |

## 文本、数字和颜色

| **变量名**                | **描述**                                       | **示例**                                    |
|:--------------------------|:----------------------------------------------|:-------------------------------------------|
| **`$randomAlphaNumeric`** | 一个随机的字母或数字字符                         | `6`, `"y"`, `"z"`                          |
| **`$randomBoolean`**      | 一个随机的布尔值（true/false）                   | `true`, `false`, `false`, `true`           |
| **`$randomInt`**          | 一个 1 到 1000 之间的随机整数                    | `802`, `494`, `200`                        |
| **`$randomColor`**        | 一个随机的颜色                                  | `"red"`, `"fuchsia"`, `"grey"`             |
| **`$randomHexColor`**     | 一个随机的十六进制值                             | `"#47594a"`, `"#431e48"`, `"#106f21"`      |
| **`$randomAbbreviation`** | 一个随机的缩写                                  | `SQL`, `PCI`, `JSON`                       |

## 互联网及IP地址

| **变量名**                | <div style="width: 160px;">**描述**</div>      | **示例**                                    |
|:--------------------------|:----------------------------------------------|:-------------------------------------------|
| **`$randomIP`**           | 一个随机的 IPv4 地址                            | `241.102.234.100`, `216.7.27.38`           |
| **`$randomIPV6`**         | 一个随机的 IPv6 地址                            | `dbe2:7ae6:119b:c161:1560:6dda:3a9b:90a9`  |
|                           |                                               | `c482:23a4:ce4c:a668:7736:6cc5:b0b6:cc37`  |
|                           |                                               | `c791:18d1:fbba:87d8:d929:22aa:5a0a:ac3d`  |
| **`$randomMACAddress`**   | 一个随机的 MAC 地址                             | `33:d4:68:5f:b4:c7`, `1f:6e:db:3d:ed:fa`   |
| **`$randomPassword`**     | 一个随机的 15 个字符的字母数字密码                | `t9iXe7COoDKv8k3`, `QAzNFQtvR9cg2rq`       |
| **`$randomLocale`**       | 一个随机的俩字母的语言代码（ISO 639-1）           | `"ny"`, `"sr"`, `"si"`                     |
| **`$randomUserAgent`**    | 一个随机的用户代理                              | `Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.9.8; rv:15.6) Gecko/20100101 Firefox/15.6.6` |
|                           |                                               | `Opera/10.27 (Windows NT 5.3; U; AB Presto/2.9.177 Version/10.00)` |
|                           |                                               | `Mozilla/5.0 (Windows NT 6.2; rv:13.5) Gecko/20100101 Firefox/13.5.6` |
| **`$randomProtocol`**     | 一个随机的互联网协议                            | `"http"`, `"https"`                        |
| **`$randomSemver`**       | 一个随机的语义版本号                            | `7.0.5`, `2.5.8`, `6.4.9`                  |

## 名字

| **变量名**                    | <div style="width: 160px;">**描述**</div> | **示例**                                        |
|:------------------------------|:------------------------------|:----------------------------------------------------------|
| **`$randomFirstName`**        | 一个随机的名字                  | `Ethan`, `Chandler`, `Megane`                             |
| **`$randomLastName`**         | 一个随机的姓氏                  | `Schaden`, `Schneider`, `Willms`                          |
| **`$randomFullName`**         | 一个随机的名和姓                | `Connie Runolfsdottir`, `Sylvan Fay`, `Jonathon Kunze`    |
| **`$randomNamePrefix`**       | 一个随机名称前缀                | `Dr.`, `Ms.`, `Mr.`                                       |
| **`$randomNameSuffix`**       | 一个随机名称的后缀              | `I`, `MD`, `DDS`                                          |

## 职业

| **变量名**                    | **描述**                       | **示例**                                                  |
|:------------------------------|:------------------------------|:----------------------------------------------------------|
| **`$randomJobArea`**          | 一个随机的工作区域              | `Mobility`, `Intranet`, `Configuration`                   |
| **`$randomJobDescriptor`**    | 一个随机的工作描述              | `Forward`, `Corporate`, `Senior`                          |
| **`$randomJobTitle`**         | 一个随机的职位名称              | `International Creative Liaison`,                         |
| | | `Product Factors Officer`,      |
| | | `Future Interactions Executive` |
| **`$randomJobType`**          | 一个随机的职业类型              | `Supervisor`, `Manager`, `Coordinator`                    |

## 电话、地址和位置

| **变量名**                    | **描述**                       | **示例**                                                  |
|:------------------------------|:------------------------------|:----------------------------------------------------------|
| **`$randomPhoneNumber`**      | 一个随机的 10 位数字电话号码     | `700-008-5275`, `494-261-3424`, `662-302-7817`            |
| **`$randomPhoneNumberExt`**   | 一个分机号为 12 位的随机电话号码 | `27-199-983-3864`, `99-841-448-2775`   |
| **`$randomCity`**             | 一个随机的城市名                | `Spinkahaven`, `Korbinburgh`, `Lefflerport`               |
| **`$randomStreetName`**       | 一个随机的街道名                | `Kuhic Island`, `General Street`, `Kendrick Springs`      |
| **`$randomStreetAddress`**    | 一个随机的街道地址              | `5742 Harvey Streets`, `47906 Wilmer Orchard`             |
| **`$randomCountry`**          | 一个随机的国家                 |`Lao People's Democratic Republic`, `Kazakhstan`, `Austria`|
| **`$randomCountryCode`**      | 一个随机的俩字母的国家代码（ISO 3166-1 alpha-2）       | `CV`, `MD`, `TD`                    |
| **`$randomLatitude`**         | 一个随机的纬度坐标              | `55.2099`, `27.3644`, `-84.7514`                          |
| **`$randomLongitude`**        | 一个随机的经度坐标              | `40.6609`, `171.7139`, `-159.9757`                        |

## 图片

| **变量名**                | <div style="width: 200px;">**描述**</div>      | **示例**                                   |
|:--------------------------|:----------------------------------------------|:-------------------------------------------|
| **`$randomImage`**        | 一张随机的图片                                  | `http://lorempixel.com/640/480/technics`   |
|                           |                                               | `http://lorempixel.com/640/480/food`       |
|                           |                                               | `http://lorempixel.com/640/480/business`   |
| **`$randomAvatarImage`**  | 一张随机的头像图片                              | `https://s3.amazonaws.com/uifaces/faces/twitter/johnsmithagency/128.jpg` |
|                           |                                               | `https://s3.amazonaws.com/uifaces/faces/twitter/xadhix/128.jpg` |
|                           |                                               | `https://s3.amazonaws.com/uifaces/faces/twitter/martip07/128.jpg` |
| **`$randomImageUrl`**     | 一个随机的图片 URL                              | `http://lorempixel.com/640/480`            |
| **`$randomAbstractImage`**| 一个随机的抽象图片 URL                          | `http://lorempixel.com/640/480/abstract`   |
| **`$randomAnimalsImage`** | 一个随机的动物图片 URL                          | `http://lorempixel.com/640/480/animals`    |
| **`$randomBusinessImage`**| 一个随机的股票图片 URL                       | `http://lorempixel.com/640/480/business`   |
| **`$randomCatsImage`**    | 一个随机的猫咪图片 URL                          | `http://lorempixel.com/640/480/cats`       |
| **`$randomCityImage`**    | 一个随机的城市图片 URL                          | `http://lorempixel.com/640/480/city`       |
| **`$randomFoodImage`**    | 一个随机的食物图片 URL                          | `http://lorempixel.com/640/480/food`       |
|**`$randomNightlifeImage`**| 一个随机的夜生活图片 URL                        | `http://lorempixel.com/640/480/nightlife`  |
| **`$randomFashionImage`** | 一个随机的时装图片 URL                          | `http://lorempixel.com/640/480/fashion`    |
| **`$randomPeopleImage`**  | 一个随机的人物图片 URL                          | `http://lorempixel.com/640/480/people`     |
| **`$randomNatureImage`**  | 一个随机的自然图片 URL                          | `http://lorempixel.com/640/480/nature`     |
| **`$randomSportsImage`**  | 一个随机的运动图片 URL                          | `http://lorempixel.com/640/480/sports`     |
| **`$randomTechnicsImage`**| 一个随机的技术图片 URL                          | `http://lorempixel.com/640/480/technics`   |
|**`$randomTransportImage`**| 一个随机的载具图片 URL                      | `http://lorempixel.com/640/480/transport`  |
| **`$randomImageDataUri`** | 一个随机的数据图片 URL                          | `data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E` |

## 金融

| **变量名**                 | <div style="width: 170px;">**描述**</div>      | **示例**                                       |
|:---------------------------|:----------------------------------------------|:---------------------------------------------|
| **`$randomBankAccount`**   | 一个随机的 8 位数字银行帐号                      | `09454073`, `65653440`, `75728757`           |
|**`$randomBankAccountName`**| 一个随机的银行帐户名称（例如储蓄账户，支票账户）    | `Home Loan Account`, `Checking Account`, `Auto Loan Account` |
| **`$randomCreditCardMask`**| 一个随机的信用卡掩码                             | `3622`, `5815`, `6257`                       |
| **`$randomBankAccountBic`**| 一个随机的 BIC (银行标识码 Bank Identifier Code) | `EZIAUGJ1`, `KXCUTVJ1`, `DIVIPLL1`           |
|**`$randomBankAccountIban`**| 一个随机的 15-31 个字符的 IBAN (国际银行账号 International Bank Account Number) | `MU20ZPUN3039684000618086155TKZ` |
| | | `BR7580569810060080800805730W2` |
| | | `XK241602002200395017`          |
| **`$randomTransactionType`**| 一个随机的事务类型 (e.g. 发票，付款，定金)       | `invoice`, `payment`, `deposit`|
| **`$randomCurrencyCode`**  | 一个随机的仨字母的货币代码（ISO-4217）            | `CDF`, `ZMK`, `GNF`                          |
| **`$randomCurrencyName`**  | 一个随机的货币名称                              | `CFP Franc`, `Cordoba Oro`, `Pound Sterling` |
| **`$randomCurrencySymbol`**| 一个随机的货币符号                              | `$`, `£`                                     |
| **`$randomBitcoin`**       | 一个随机的比特币地址                            | `3VB8JGT7Y4Z63U68KGGKDXMLLH5`
| | | `1GY5TL5NEX3D1EA0TCWPLGVPQF5EAF` |
| | | `14IIEXV2AKZAHSCY2KNYP213VRLD` |

## 商业

| **变量名**                | **描述**                                       | **示例**                                   |
|:--------------------------|:----------------------------------------------|:-------------------------------------------|
| **`$randomCompanyName`**  | 一个随机的公司名称                              | `Johns - Kassulke`, `Grady LLC`            |
| **`$randomCompanySuffix`**| 一个随机的公司后缀（e.g. Inc, LLC, Group）       | `Inc`, `LLC`, `Group`                      |
| **`$randomBs`**           | 一个随机的商业用语                              | `killer leverage schemas`,                 |
|                           |                                               | `bricks-and-clicks deploy markets`,        |
|                           |                                               | `world-class unleash platforms`            |
| **`$randomBsAdjective`**  | 一个随机的非正式的商务用语形容词                  | `viral`, `24/7`, `24/365`                  |
| **`$randomBsBuzz`**       | 一个随机的商业行话                              | `repurpose`, `harness`, `transition`       |
| **`$randomBsNoun`**       | 一个随机的商务用语名词                           | `e-services`, `markets`, `interfaces`      |

## 标语

| **变量名**                        | <div style="width: 160px;">**描述**</div> | **示例**                                             |
|:----------------------------------|:--------------------------------------|:----------------------------------------------------|
| **`$randomCatchPhrase`**          | 一个随机的标语                          | `Future-proofed heuristic open architecture`,       |
|                                   |                                       | `Quality-focused executive toolset`,                |
|                                   |                                       | `Grass-roots real-time definition`                  |
| **`$randomCatchPhraseAdjective`** | 一个随机的标语形容词                    | `Self-enabling`, `Business-focused`, `Down-sized`   |
| **`$randomCatchPhraseDescriptor`**| 一个随机的标语描述                      | `bandwidth-monitored`, `needs-based`, `homogeneous` |
| **`$randomCatchPhraseNoun`**      | 随机生成一个标语名                      | `secured line`, `superstructure`,`installation`     |

## 数据库

| **变量名**                    | <div style="width: 180px;">**描述**</div>  | **示例**                                    |
|:------------------------------|:------------------------------------------|:-------------------------------------------|
| **`$randomDatabaseColumn`**   | 一个随机的数据库列名                         | `updatedAt`, `token`, `group`              |
| **`$randomDatabaseType`**     | 一个随机的数据类型                          | `tinyint`, `text`                          |
| **`$randomDatabaseCollation`**| 一个随机的数据库字符集                       | `cp1250_bin`, `utf8_general_ci`, `cp1250_general_ci`|
| **`$randomDatabaseEngine`**   | 一个随机的数据库引擎                         | `MyISAM`, `InnoDB`, `Memory`               |

## 日期

| **变量名**                    | <div style="width: 180px;">**描述**</div> | **示例**                                                   |
|:------------------------------|:--------------------------------|:----------------------------------------------------------|
| **`$randomDateFuture`**       | 一个随机的未来日期时间             | `Tue Mar 17 2020 13:11:50 GMT+0530 (India Standard Time)`,|
|                               |                                 | `Fri Sep 20 2019 23:51:18 GMT+0530 (India Standard Time)`,|
|                               |                                 | `Thu Nov 07 2019 19:20:06 GMT+0530 (India Standard Time)` |
| **`$randomDatePast`**         | 一个随机的过去日期时间             | `Sat Mar 02 2019 09:09:26 GMT+0530 (India Standard Time)`,|
|                               |                                 | `Sat Feb 02 2019 00:12:17 GMT+0530 (India Standard Time)`,|
|                               |                                 | `Thu Jun 13 2019 03:08:43 GMT+0530 (India Standard Time)` |
| **`$randomDateRecent`**       | 一个随机的最近日期时间             | `Tue Jul 09 2019 23:12:37 GMT+0530 (India Standard Time)`,|
|                               |                                 | `Wed Jul 10 2019 15:27:11 GMT+0530 (India Standard Time)`,|
|                               |                                 | `Wed Jul 10 2019 01:28:31 GMT+0530 (India Standard Time)` |
| **`$randomWeekday`**          | 一个随机的星期名                  | `Thursday`, `Friday`, `Monday`                            |
| **`$randomMonth`**            | 一个随机的月份名                  | `February`, `May`, `January`                              |

## 域名，邮箱和用户名

| **变量名**                    | <div style="width: 200px;">**描述**</div> | **示例**                                                   |
|:------------------------------|:--------------------------------|:----------------------------------------------------------|
| **`$randomDomainName`**       | 一个随机的域名                    | `gracie.biz`, `armando.biz`, `trevor.info`                |
| **`$randomDomainSuffix`**     | 一个随机的域名后缀（顶级域名）      | `org`, `net`, `com`                                       |
| **`$randomDomainWord`**       | 一个随机的不合格域名               | `gwen`, `jaden`, `donnell`                                |
| **`$randomEmail`**            | 一个随机的邮箱地址                 | `Pablo62@gmail.com`, `Ruthe42@hotmail.com`, `Iva.Kovacek61@hotmail.com`|
| **`$randomExampleEmail`**     | 一个随机的使用 “example” 域名的邮箱地址 | `Talon28@example.com`, `Quinten_Kerluke45@example.net`, `Casey81@example.net` |
| **`$randomUserName`**         | 一个随机的用户名                   | `Jarrell.Gutkowski`, `Lottie.Smitham24`, `Alia99`         |
| **`$randomUrl`**              | 一个随机的 URL                    | `https://anais.net`, `https://tristin.net`, `http://jakob.name` |

## 文件和目录

| **变量名**                    | <div style="width: 180px;">**描述**</div>              | **示例**                                 |
|:------------------------------|:------------------------------------------------------|:----------------------------------------|
| **`$randomFileName`**         | 一个随机的文件名（包括不常见的扩展名）                     | `neural_sri_lanka_rupee_gloves.gdoc`,   |
|                               |                                                       | `plastic_awesome_garden.tif`,           |
|                               |                                                       | `incredible_ivory_agent.lzh`            |
| **`$randomFileType`**         | 一个随机的文件类型（包括不常见的文件类型）                 | `model`, `application`, `video`         |
| **`$randomFileExt`**          | 一个随机的文件扩展名（包括不常见的扩展名）                 | `war`, `book`, `fsc`                    |
| **`$randomCommonFileName`**   | 一个随机的文件名                                        | `well_modulated.mpg4`,                  |
|                               |                                                       | `rustic_plastic_tuna.gif`,              |
|                               |                                                       | `checking_account_end_to_end_robust.wav`|
| **`$randomCommonFileType`**   | 一个随机的、常见的文件类型                               | `application`, `audio`                  |
| **`$randomCommonFileExt`**    | 一个随机的、常见的文件扩展名                             | `m2v`, `wav`, `png`                     |
| **`$randomFilePath`**         | 一个随机的文件路径                                      | `/home/programming_chicken.cpio`,       |
|                               |                                                       | `/usr/obj/fresh_bandwidth_monitored_beauty.onetoc`,|
|                               |                                                       | `/dev/css_rustic.pm`                    |
| **`$randomDirectoryPath`**    | 一个随机的目录路径                                      | `/usr/bin`, `/root`, `/usr/local/bin`   |
| **`$randomMimeType`**         | 一个随机的 MIME 类型                                    | `audio/vnd.vmx.cvsd`,                   |
|                               |                                                       | `application/vnd.groove-identity-message`,|
|                               |                                                       | `application/vnd.oasis.opendocument.graphics-template`|

## 商店

| **变量名**                    | **描述**                                  | **示例**                                        |
|:------------------------------|:-----------------------------------------|:-----------------------------------------------|
| **`$randomPrice`**            | 一个随机的价格在 100.00 到 999.00 之间      | `531.55`, `488.76`, `511.56`                   |
| **`$randomProduct`**          | 一件随机的商品                             | `Towels`, `Pizza`, `Pants`                     |
| **`$randomProductAdjective`** | 一个随机的商品形容词                        | `Unbranded`, `Incredible`, `Tasty`             |
| **`$randomProductMaterial`**  | 一个随机的商品材料                          | `Steel`, `Plastic`, `Frozen`                   |
| **`$randomProductName`**      | 一个随机的商品名称                          | `Handmade Concrete Tuna`, `Refined Rubber Hat` |
| **`$randomDepartment`**       | 一个随机的商业类别                          | `Tools`, `Movies`, `Electronics`               |

## 语法

| **变量名**                    | <div style="width: 140px;">**描述**</div> | **示例**                                        |
|:------------------------------|:-----------------------------------------|:-----------------------------------------------|
| **`$randomNoun`**             | 一个随机的名词                             | `matrix`, `bus`, `bandwidth`                   |
| **`$randomVerb`**             | 一个随机的动词                             | `parse`, `quantify`, `navigate`                |
| **`$randomIngverb`**          | 一个以 “-ing” 结尾的随机动词                | `synthesizing`, `navigating`, `backing up`     |
| **`$randomAdjective`**        | 一个随机的形容词                           | `auxiliary`, `multi-byte`, `back-end`          |
| **`$randomWord`**             | 一个随机的单词                             | `withdrawal`, `infrastructures`, `IB`          |
| **`$randomWords`**            | 一些随机的单词                             | `Samoa Synergistic sticky copying Grocery`,    |
|                               |                                          | `Corporate Springs`,                           |
|                               |                                          | `Christmas Island Ghana Quality`               |
| **`$randomPhrase`**           | 一个随机的短语                          | `You can't program the monitor without navigating the mobile XML program!`, |
| | | `overriding the capacitor won't do anything, we need to compress the optical SMS transmitter!`, |
| | | `I'll generate the virtual AI program, that should microchip the RAM monitor!` |

## Lorem Ipsum

> 译者注：Lorem Ipsum 中文又称 **乱数假文** / **哑元文本**，是指一篇常用于排版设计领域的拉丁文文章。
> [Lorem ipsum 百度百科](https://baike.baidu.com/item/Lorem%20ipsum)

| **变量名**                    | <div style="width: 250px;">**描述**</div> | **示例**                                          |
|:------------------------------|:--------------------------------|:----------------------------------------------------------|
| **`$randomLoremWord`**        | 一个 lorem ipsum 文本的随机单词   | `est`                                                     |
| **`$randomLoremWords`**       | 一些 lorem ipsum 文本的随机单词   | `vel repellat nobis`                                  |
| **`$randomLoremSentence`**    | 一个 lorem ipsum 文本的随机句子   | `Molestias consequuntur nisi non quod.`               |
| **`$randomLoremSentences`**   | 一个 2-6 句的随机 lorem ipsum 文本|`Et sint voluptas similique iure amet perspiciatis vero sequi atque. Ut porro sit et hic. Neque aspernatur vitae fugiat ut dolore et veritatis. Ab iusto ex delectus animi. Voluptates nisi iusto. Impedit quod quae voluptate qui.`|
| **`$randomLoremParagraph`**   | 一段随机的 lorem ipsum 文本|`Ab aliquid odio iste quo voluptas voluptatem dignissimos velit. Recusandae facilis qui commodi ea magnam enim nostrum quia quis. Nihil est suscipit assumenda ut voluptatem sed. Esse ab voluptas odit qui molestiae. Rem est nesciunt est quis ipsam expedita consequuntur.`|
| **`$randomLoremParagraphs`** | 3 段随机的 lorem ipsum 文本 |`Voluptatem rem magnam aliquam ab id aut quaerat. Placeat provident possimus voluptatibus dicta velit non aut quasi. Mollitia et aliquam expedita sunt dolores nam consequuntur. Nam dolorum delectus ipsam repudiandae et ipsam ut voluptatum totam. Nobis labore labore recusandae ipsam quo.`|
| | | `Voluptatem occaecati omnis debitis eum libero. Veniam et cum unde. Nisi facere repudiandae error aperiam expedita optio quae consequatur qui. Vel ut sit aliquid omnis. Est placeat ducimus. Libero voluptatem eius occaecati ad sint voluptatibus laborum provident iure.`|
| | | `Autem est sequi ut tenetur omnis enim. Fuga nisi dolor expedita. Ea dolore ut et a nostrum quae ut reprehenderit iste. Numquam optio magnam omnis architecto non. Est cumque laboriosam quibusdam eos voluptatibus velit omnis. Voluptatem officiis nulla omnis ratione excepturi.`|
| **`$randomLoremText`**        | 随机数量的 lorem ipsum 文本 | `Quisquam asperiores exercitationem ut ipsum. Aut eius nesciunt. Et reiciendis aut alias eaque. Nihil amet laboriosam pariatur eligendi. Sunt ullam ut sint natus ducimus. Voluptas harum aspernatur soluta rem nam.` |
| **`$randomLoremSlug`**        | 一个随机 lorem ipsum URL slug | `eos-aperiam-accusamus`, `beatae-id-molestiae`, `qui-est-repellat` |
| **`$randomLoremLines`**       | 1-5 行随机的 lorem ipsum 文本 | `Ducimus in ut mollitia.\nA itaque non.\nHarum temporibus nihil voluptas.\nIste in sed et nesciunt in quaerat sed.`|
