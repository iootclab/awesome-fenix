(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{700:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"archsummit2021主题演讲：从软件的历史看架构的未来"}},[t._v("ArchSummit2021主题演讲：从软件的历史看架构的未来")]),t._v(" "),a("p",[t._v("1972 年，"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Edsger_W._Dijkstra",target:"_blank",rel:"noopener noreferrer"}},[t._v("Edsger Dijkstra"),a("OutboundLink")],1),t._v(" 在为图灵奖颁授典礼所写的"),a("a",{attrs:{href:"https://www.cs.utexas.edu/users/EWD/transcriptions/EWD03xx/EWD340.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("感言文章"),a("OutboundLink")],1),t._v("中说到：“在没有计算机的时候，也就没有编程问题；当我们有了简单的计算机，编程只是个小问题；而现在我们有了算力规模庞大的计算机，那编程就成为了一个同样巨大的问题了”。半个世纪前，Dijkstra 已经敏锐洞见了机器算力的提升是编程方法发展的直接牵引，每当人类掌握了更强的算力，便按捺不住想去解决一些以前甚至都不敢去设想的新问题，由此引发软件设计模式的重大变革。")]),t._v(" "),a("h2",{attrs:{id:"历史上的软件危机和契机"}},[t._v("历史上的软件危机和契机")]),t._v(" "),a("p",[t._v("计算机刚诞生的年代，硬件规模还很小，甚至程序员仅凭大脑就足够记住数据在几 KB 内存中的布局情况，理解每条指令在电路中的运行逻辑。此时的计算机尽管运算速度比人类快，但内部却并没有什么人所不知道的事情；此时的软件开发并没有独立的“架构”可言，软件架构与硬件架构是直接物理对齐的。")]),t._v(" "),a("p",[t._v("随着计算机的快速发展，直接面向硬件进行的软件开发很快触碰到了瓶颈，人脑的生物局限显然无法跟上机器算力前进的步伐，当机器强大到世界上最聪明的人都无法为它编写出合适的程序了，那计算机科学还能继续发展吗？这便是历史上第一次软件危机的根源。第一次软件危机，同时也是"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Structured_programming",target:"_blank",rel:"noopener noreferrer"}},[t._v("结构化编程"),a("OutboundLink")],1),t._v("发展的契机，结构化编程扭转了当时直接面向全局数据、满屏 Goto 语句书写"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Spaghetti_code",target:"_blank",rel:"noopener noreferrer"}},[t._v("面条式代码"),a("OutboundLink")],1),t._v("（Spaghetti Code）的编程风气，强调可独立编写、可重复利用的子过程/局部块的重要性，让软件的每个局部都能够设计专门的算法和数据结构，允许每一位程序员只关注自己所负责的部分，从而在整体上控制住了软件开发的复杂度。此时，软件的架构才开始独立于硬件物理架构而存在，软件业开始出现把控全局设计的架构师与聚焦局部实现的程序员的角色分工。")]),t._v(" "),a("p",[t._v("将软件从整体划分成若干个局部，人类能够以群体配合来共同开发软件，使得人与计算机又和谐共处了十余年。不过，机器的算力膨胀仍然在持续，人类群体的沟通协作能力却终有极限。人毕竟不是可复制的程序，每个人都有自己的理解与认知，如何让各个模块能准确地协同工作成了一场灾难，这就是第二次软件危机的根源。《"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/The_Mythical_Man-Month",target:"_blank",rel:"noopener noreferrer"}},[t._v("人月神话"),a("OutboundLink")],1),t._v("》中有一个几乎每位程序员都听过的案例：IBM 公司为开发 OS/360 系统投入的成本达到了美国的“曼哈顿”原子弹计划的 25%，共有 4000 多个模块，约 100 万条指令，超过 5000 人年，耗资数亿美元，即使如此，结果还是延期交付，在交付使用后的系统中仍发现大量的缺陷。")]),t._v(" "),a("p",[t._v("渡过第二次软件危机的过程中，面向对象编程逐步取代了面向过程的结构化编程，成为主流的程序设计思想，这次思想转变宣告“追求最符合人类思维的视角来抽象问题”取代了“追求最符合机器运行特征的算法与数据结构”成为软件架构的最高优先级，并一直持续沿用至今。这次危机还直接导致软件工程的诞生， 如何以系统性的、规范化的、可定量的方法去高质量地开发和维护软件成为一门独立的科学。")]),t._v(" "),a("h2",{attrs:{id:"云与分布式渐成为主流"}},[t._v("云与分布式渐成为主流")]),t._v(" "),a("p",[t._v("如果说历史上的第一、二次软件危机分别是机器算力规模超过了人类个体的生理极限，超过了人类群体的沟通极限的话。那么在今天，在云计算的时代，数据中心所能提供的算力其实已经逼近到了人类协作的工程极限，与此算力相符的程序规模，几乎也到了无论采用何种工程措施去优化过程、无论采用什么管理手段去提升质量，都仍然不可避免会出现意外与异常的程度。大家都相信只要软件系统由大量人员共同研发，并使其分布在云中大量节点协同运行，随着项目规模的增大、时间变长，就肯定会有人疏忽犯错，会有代码携带缺陷，会有电脑宕机崩溃，会有网络堵塞中断，总之，必然会受到墨菲定律的无情打击。")]),t._v(" "),a("p",[t._v("软件架构要与硬件算力规模对齐，目前用来适配云计算与分布式的主流架构形式是微服务，微服务兴起之时，曾涌现出各类文章去总结、赞美微服务带来的种种好处，诸如简化部署、逻辑拆分更清晰、便于技术异构、易于伸缩拓展应对更高的性能，等等，这些当然都是重要优点。可是，如果不拘泥于特定场景特定问题，以宏观的角度来看，前面所列这种种好处都只算是“锦上添花”、是属于让系统“更好”的动因，肯定比不上系统如何确保“生存”来得关键。在笔者看来，从单体到微服务的最根本的推动力，是为了方便某个服务能够顺利地“消亡”与“重生”，局部个体的生死更迭，是关系到整个系统能否可靠续存的关键因素。")]),t._v(" "),a("p",[t._v("举个例子，在很长的时间里面，企业应用中采用单体架构的 Java 系统，其更新、升级都必须要有固定的停机计划，必须在特定的时间窗口内才能按时开始，必须按时结束。如果出现了非计划的宕机，那便是生产事故。但是软件的缺陷不可能遵循停机计划来“安排时间出错”，为了应对缺陷与变化，做到不停机的检修，Java 曾经搞出了 OSGi 和 JVMTI Instrumentation 等复杂的 HotSwap 方案，以实现给奔跑中的汽车更换轮胎这种匪夷所思却又无可奈何的需求；而在微服务架构的视角下，所谓系统检修，充其量只是一次服务滚动更新而已，灰度部署新的程序版本，然后导流、测试、发布即可。")]),t._v(" "),a("p",[t._v("流水不腐，有老朽，有消亡，有重生，有更迭才是生态运行的合理规律，如何采用不可靠的部件来构造出一个可靠的系统，是软件架构适配云与分布式算力发展的关键所在。如果系统中局部能拥有独立的生命周期，在整体架构上有物理隔离的设计，那即便采用了不可靠部件，在系统外观察，整体上仍然有可能表现出稳定健壮的服务能力。")]),t._v(" "),a("h2",{attrs:{id:"从云计算到云不可知"}},[t._v("从云计算到云不可知")]),t._v(" "),a("p",[t._v("我们继续顺着”软件架构的演进由人与机器的矛盾所驱动，逐渐与算力规模对齐“这条线索，思考软件开发的下一个核心矛盾将会是什么？窥探下一个时代的软件架构会具备何种特征？")]),t._v(" "),a("p",[t._v("笔者认为，软件发展的下一个关键矛盾将会是算力规模超过人应掌握合理知识的极限。经过良好设计的分布式系统，拥有局部的可再生性，确实能在整体上展现出可靠的服务能力。然而，“良好地设计”一个分布式系统很不容易，今天无限火热的云原生、微服务、不可变基础设施、弹性计算、服务网格、无服务器架构、高低零代码，等等，背后都能展开成一整套成体系的开发或者设计方法。这些新的技术在为人们解决了更复杂软件问题的同时，也正在把编程这件事情本身的复杂度推向更高层次。一名刚刚走出校园的大学生，要掌握计算机与程序执行的基本原理，要消化完所用编程语言的核心细节，要掌握领域中常用的类库、框架和工具，要理解分布式系统的服务弹性、容错、限流等设计技巧，要接触容器、云原生、函数计算等运行架构层面的知识，耗费上十年时间都丝毫不奇怪。")]),t._v(" "),a("p",[t._v("在哲学里，有人曾经严肃研讨过“"),a("a",{attrs:{href:"https://www.zhihu.com/question/351877512/answer/866449201",target:"_blank",rel:"noopener noreferrer"}},[t._v("知识膨胀"),a("OutboundLink")],1),t._v("”的问题，说的是人类科学的前沿在不断拓展，触及到前沿所需的基础知识也不断增加，是否会陷入后来者终其一生都无法攒下足够基础，导致人类知识陷入止步不前的危机之中。在计算机科学里就更加现实了，知识膨胀直接表现为从毕业到“"),a("a",{attrs:{href:"https://www.infoq.cn/article/fhzjrzzmzvcee17rcrm0",target:"_blank",rel:"noopener noreferrer"}},[t._v("35 岁退休"),a("OutboundLink")],1),t._v("”（梗）之前，很多程序员恐怕都很难具备设计分布式架构所需的全面知识。")]),t._v(" "),a("p",[t._v("云与分布式时代，软件知识看来又到了该“打个结”的时刻，要设法把那些重要但普适的知识标准化并下沉。好比今天除非那些专门的领域，大多数程序员已经不再需要关注寄存器、信号、中断等与机器底层的细节，也不会太关注操作系统内存页/段、执行调度器、输入输出原理等操作系统底层的细节，等云数据中心彻底成熟，成为主流的程序部署运行环境后，云与分布式的复杂细节也同样会被隐藏起来。")]),t._v(" "),a("p",[t._v("未来软件如何使用云服务，现阶段还很难有定论，但有迹象表明，软件中的"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/DFX",target:"_blank",rel:"noopener noreferrer"}},[t._v("非功能属性"),a("OutboundLink")],1),t._v("会率先被外置出去，而不会继续像现在这样，在开发阶段镌刻定型于程序代码之中。软件是以单体还是以分布式运行，需要提供怎样的 SLA，具体与哪些技术组件进行协作，通讯中是否要容错限流，等等，都不必在开发期就锁定起来，也不必由业务开发人员去关注，他们只处理那些承载系统业务价值的功能属性。这种外挂式的软件架构风格，如同你要上战场便穿上军装，要游泳便穿上泳衣，去舞会便穿上礼服，不同的装备让人能适应不同的场景。而那些“可穿戴”的装备，都是由专业厂商设计，有质量保证，不需要每位编写代码的程序员都知道它们应该如何工作。")]),t._v(" "),a("p",[t._v("正在逐渐成熟的 Service Mesh 就展露出一些这方面的特征，Sidecar 以流量劫持的方式，能够为程序间的网络通讯额外附加上连接稳定性（如重试、熔断）、安全性（如鉴权、双向通讯加密）、可管理性和可观测性，既不依赖人专门去编码，也不依赖某款语言或者框架的预置能力。不过，Service Mesh 仅仅能满足与服务通讯能力相关的治理，而软件设计所需的能力并不止通讯这一项，开发者要依赖多种提供不同能力的运行时来搭建软件，譬如高级语言虚拟机提供执行能力、消息队列提供 Pub/Sub 通知能力、容器编排系统提供生命周期管理能力，等等。开发者使用这些能力时，也面临与通讯一样的治理需求。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://shardingsphere.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ShardingSphere"),a("OutboundLink")],1),t._v(" 的作者张亮曾经"),a("a",{attrs:{href:"https://www.infoq.cn/article/database-mesh-sharding-jdbc",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 InfoQ 撰文"),a("OutboundLink")],1),t._v('，提出过 Database Mesh 的设想，把数据库发现、访问路由、数据分片、读写分离、负载均衡等特性从程序代码中拿出去，也交给 Sidecar 来实现。既然 Service 和 Database 可以 Mesh 化，那 Cache Mesh、MessageQueue Mesh、Storage Mesh……等自然都有了登场的理由。更进一步，分布式中那些复杂却有共性的处理技巧，如并行、并发、状态、共识，等等，是不是也可以从程序代码中独立出去，由 Sidecar 引导至合适的、不特定的部件中妥善处理？最后，一旦云计算服务提供商的技术货架中大多数部件和能力被 Mesh 抹掉了差异化特性，剩下都是一致的标准操作，那 Serverless 一直倡导的"后端即服务"（BaaS）便立刻有了无比广泛的基础。此时，云数据中心就仿佛是一部拥有无限算力的机器与一套有标准接口的操作系统，开发者无需关心程序在哪里执行（FaaS），也不再关心程序有哪些依赖（BaaS）。')]),t._v(" "),a("p",[t._v("上面仅谈概念恐怕有些抽象，笔者以“如何存储一个 K/V 值对”为例，来看一下当前的编程与未来设想的编程方式会有什么差别。下面这段代码是现在随处可见的大路货，它具有稍后列举的几点问题：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HostAndPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" nodes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedHashSet")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HostAndPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HostAndPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.1.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HostAndPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.1.2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JedisPoolConfig")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JedisPoolConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaxTotal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaxIdle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Jedis")]),t._v(" jedis "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JedisCluster")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jedis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icyfenix"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"name\\":\\"zzm\\", \\"email\\":\\"icyfenix@gmail.com\\"}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ok")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Redis error:{}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExceptionTools")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExceptionStackTrace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("首先，这是一段操作 Redis 的代码，意味着你需要了解 Redis 的知识，不说实现原理，起码要知道它的 API 该如何使用，程序代码也必须引入 Redis 的客户端 SDK 作为依赖项。")]),t._v(" "),a("li",[t._v("其次，这是一段可运行的 Java 代码，意味着你需要知道 Redis 的服务位置（如 Host 地址、端口等）、部署方式（如单点、集群、分片情况等）、链接信息（如鉴权方式、密码等），这些其实应该是 SRE 而不是 SDE 的职责。")]),t._v(" "),a("li",[t._v("最后，这是一段在生产环境容易受到挑战的代码，生产可能还需要考虑额外的非功能属性：要不要启用连接池？并发策略是 first-write-wins 还是 last-write-wins ？是否需要支持事务？数据能保证什么级别的一致性？要批量操作该怎么办？假若这些非功能属性都反应到代码上，结果肯定要比现在看到的复杂上不少，其中有一些需求甚至仅凭应用代码是无法解决的。譬如要支持事务，用 Redis 可以，用 Memcached/Cassandra 就不行；要支持强一致性，用 Etcd/ZooKeeper 可以，用 Redis 就不行。")])]),t._v(" "),a("p",[t._v("以上问题，在今天看来其实都算不上真正的问题，去写程序就该懂得写程序的知识，但是作为一名业务开发人员，意图仅仅是想保存或者读取一个 K/V 值对而已，要用 Redis、Etcd、Memcached 或关系库作为存储、要用哪个云服务商提供的存储服务、要满足哪些非功能特性，本不该属于操作意图的一部分，都应该被隐藏起来。譬如下面这样来完成 K/V 值对的存储和访问：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST http://localhost:3500/v1.0/state/users "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[\n        {\n          "key": "icyfenix",\n          "value": {"name":"zzm", "email":"icyfenix@gmail.com"}\n        }\n      ]\'')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://localhost:3500/v1.0/state/users/icyfenix "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zzm"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icyfenix@gmail.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("至于为什么会存在“http://localhost:3500”这样的服务地址，后面连接的具体是什么存储服务，这些是 Sidecar 而不是业务开发人员需要关心的事情。不同产品与不同云计算服务商之间的差异，被隐藏在相同的操作原语（Primitives）和代表服务标准含义的接口（如 HTTP URL）之下。这样云计算就自然而然地打破了目前各厂商之间和产品之间的隔阂，顺利步入到"),a("a",{attrs:{href:"https://www.avenga.com/magazine/cloud-agnostic-vs-cloud-native/",target:"_blank",rel:"noopener noreferrer"}},[t._v("云不可知"),a("OutboundLink")],1),t._v("（Cloud Agnostic）的阶段。这便是对云计算与分布式架构“打个结”的具体动作。")]),t._v(" "),a("p",[t._v("虽然迄今为止，上述设想距离现实还很遥远，理论不够成熟，能在生产环境中使用的多运行时框架仍处于十分早期阶段，譬如上面用于演示的代码是基于微软的 "),a("a",{attrs:{href:"https://dapr.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DAPR"),a("OutboundLink")],1),t._v(" 框架，它在上周才刚刚进入 "),a("a",{attrs:{href:"https://www.cncf.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CNCF"),a("OutboundLink")],1),t._v(" 孵化。对这个演示 DAPR 目前也仅仅能处理 K/V 存储，其它存储类型（如更为常用的关系库）目前都还完全没有考虑，但笔者愿意相信这是未来架构演进的一个主要方向，必须把复杂的问题尽量关进笼子，由专业人员去看护，才能让普通程序员更好参与软件开发，甚至通过低/零代码工具的支持，让那些没有太多编程知识，却有丰富领域知识的业务专家，也能够独立制造出优秀的软件产品。")]),t._v(" "),a("h2",{attrs:{id:"软件，架构与人"}},[t._v("软件，架构与人")]),t._v(" "),a("p",[t._v('第一次软件危机在 1950 年代末期初现端倪，结构化编程思想在 1970 年才被正式提出；第二次软件危机（连同"软件危机"这个概念）是在 1970 年'),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/NATO_Software_Engineering_Conferences",target:"_blank",rel:"noopener noreferrer"}},[t._v("北约 NATO 会议"),a("OutboundLink")],1),t._v("上被定义的，要一直到 1990 年代面向对象的设计方法成为主流，以及 Scrum、XP 等软件工程方法被提出后，这次危机才算是画上句号。从 2010 年左右开始兴起的云计算是程序的运行环境继“大型计算机”转变到“客户端-服务器”之后的"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E9%9B%B2%E7%AB%AF%E9%81%8B%E7%AE%97#%E6%B2%BF%E9%9D%A9",target:"_blank",rel:"noopener noreferrer"}},[t._v("又一场巨变"),a("OutboundLink")],1),t._v("，与前两次软件危机带来的变革契机一样，现有的许多软件架构和开发方法，一定也会在以十年计数单位的时间段内逐渐被颠覆，今天你我所谈的云原生、微服务等话题，仅仅是这次变革浪潮的开端。")]),t._v(" "),a("p",[t._v("与技术变革相伴的，是它对行业以及对程序员这个群体的影响。第一次软件危机期间，世界上最聪明的科学家/工程学家在开发软件；第二次软件危机期间，社会中的高智商高学历的精英群体在开发软件；云与分布式的时代，软件开发者恐怕也不可避免会受到下一轮冲击。未来的软件架构对普通程序员应该会是更友善更简单的，但是对普通程序员友善与简单的背后，预示着未来的信息技术行业很可能会出现“阶级分层”的现象，由于更先进的软件架构已经允许更平庸的开发者也同样能写出可运行、可用于生产的软件产品，同时又对精英开发者提出更多、更复杂的技术要求，长此以往，在开发者群体中会出现比现在还要更显著的"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Matthew_effect",target:"_blank",rel:"noopener noreferrer"}},[t._v("马太效应"),a("OutboundLink")],1),t._v("，迫使开发者逐渐分层，从如今所有开发者都普遍被认为是“高智商群体”的状态，转变为大部分工业化软件生产工人加上小部分软件设计专家的金字塔结构，就如同现在的建筑工人与建筑设计师的关系一般，今天我们经常自嘲的 CRUD Boy，随着软件产业日趋成熟，恐怕还真的会成为现实。")]),t._v(" "),a("p",[t._v("本篇文章里，笔者刻意在避免使用“第三次软件危机”这样有哗众取宠嫌疑的表述，危机总是与契机同时出现，未来的软件一定是越来越贴近于普通平民百姓的软件，但软件的未来也一定有大量的挑战与机会在等待着优秀的程序员与架构师去承担。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("软件架构与硬件算力规模对齐")]),t._v(" "),a("p",[t._v("As long as there were no machines, programming was no problem at all; when we had a few weak computers, programming became a mild problem, and now we have gigantic computers, programming has become an equally gigantic problem.")]),t._v(" "),a("p",[t._v("在没有计算机的时候，也就没有编程问题；当我们有了简单的计算机，编程只是个小问题；而现在我们有了算力规模庞大的计算机，那编程就成为了一个同样巨大的问题了。")]),t._v(" "),a("div",{staticClass:"custom-block right"},[a("p",[t._v("—— "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Edsger_W._Dijkstra",target:"_blank",rel:"noopener noreferrer"}},[t._v("Edsger Dijkstra"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Communications_of_the_ACM",target:"_blank",rel:"noopener noreferrer"}},[t._v("Communications of the ACM"),a("OutboundLink")],1),t._v(", 1972")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);