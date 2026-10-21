import { LocalizedText } from "../types";

export const researchOrder = ["watermark", "calibration", "validation", "fourier", "campanato"];

interface Overview {
  name: LocalizedText;
  why: LocalizedText;
  skills: LocalizedText;
  keywords: { term: LocalizedText; meaning: LocalizedText }[];
}

export const researchOverview: Record<string, Overview> = {
  watermark: {
    name: { en: "LLM watermarks", zh: "LLM 水印" },
    why: { en: "Detecting a watermark and measuring source linkability are different tasks. A shared key does not identify a human author.", zh: "能检测出水印，不代表已经评估了来源关联风险。共享密钥也不等于同一个人写作。" },
    skills: { en: "I lead the statistical formulation and theoretical analysis, implement the tests, and design and run the LLM experiments.", zh: "我主要负责统计问题的形式化与理论分析、检验方法的代码实现，以及 LLM 实验的设计与运行。" },
    keywords: [
      { term: { en: "Text provenance", zh: "文本来源" }, meaning: { en: "What a text can reveal about the system that generated it.", zh: "文本能透露生成系统的哪些信息。" } },
      { term: { en: "Linkability", zh: "可关联性" }, meaning: { en: "Whether two collections can be connected through a shared watermark key, without knowing that key.", zh: "不知道密钥时，能否判断两组文本共享同一水印密钥。" } },
      { term: { en: "False-positive control", zh: "误报控制" }, meaning: { en: "Checking how often independent-key collections are incorrectly linked.", zh: "检查独立密钥的文本集合被错误关联的频率。" } },
    ],
  },
  calibration: {
    name: { en: "Model calibration", zh: "模型校准" },
    why: { en: "There is no universal “best parameter” when the model is imperfect. Choose what the model needs to match before interpreting its estimates.", zh: "模型不完美时，没有脱离目标的“最佳参数”。先明确希望模型匹配什么，再解释估计结果。" },
    skills: { en: "I lead the derivation and theoretical analysis of the unified framework, its Python implementation, and evaluation through simulations and the ion-channel case study.", zh: "我主要负责统一框架的推导与理论分析、Python 实现，以及模拟研究和离子通道案例验证。" },
    keywords: [
      { term: { en: "Parameter estimation", zh: "参数估计" }, meaning: { en: "Choosing simulator settings using observations.", zh: "用观测数据选择模拟器的参数。" } },
      { term: { en: "Calibration target", zh: "校准目标" }, meaning: { en: "The parameter that minimizes the chosen measure of discrepancy.", zh: "使选定误差度量最小的参数。" } },
      { term: { en: "Uncertainty quantification", zh: "不确定性量化" }, meaning: { en: "Describing estimation uncertainty, rather than reporting only one fitted value.", zh: "除了给出一个拟合值，还描述估计的不确定性。" } },
    ],
  },
  validation: {
    name: { en: "Model validation", zh: "模型验证" },
    why: { en: "An overall test asks whether disagreement is detectable anywhere. Regional tests ask where the evidence points; non-rejection does not prove accuracy.", zh: "整体检验回答有没有可检出的偏差；区域检验帮助判断证据指向哪里。未检出不等于证明准确。" },
    skills: { en: "I lead the test derivation and theoretical proofs, implement the method in Python, and conduct the simulation studies and real-data analysis.", zh: "我主要负责检验方法的推导与理论证明、Python 实现，以及模拟研究和真实数据分析。" },
    keywords: [
      { term: { en: "Model reliability", zh: "模型可靠性" }, meaning: { en: "Understanding where model outputs are supported or challenged by observations.", zh: "理解模型输出在哪些条件下得到观测支持，或受到观测质疑。" } },
      { term: { en: "Local discrepancy", zh: "局部偏差" }, meaning: { en: "A systematic error confined to part of the input range.", zh: "只出现在部分输入范围内的系统误差。" } },
      { term: { en: "Hypothesis testing", zh: "假设检验" }, meaning: { en: "Assessing evidence against agreement while accounting for noise and false alarms.", zh: "考虑噪声与误报，评估数据反对模型一致性的证据。" } },
    ],
  },
  fourier: {
    name: { en: "Fourier analysis", zh: "Fourier 分析" },
    why: { en: "Stretching space compresses frequency in a corresponding geometry. The paper goes further: it proves regularity and bounds for Fourier transforms of much more general objects under its function-space assumptions.", zh: "空间中的伸缩与频域中的压缩有对应关系。论文更进一步：在函数空间假设下，证明更一般对象的 Fourier 变换具有的正则性与界。" },
    skills: { en: "Abstract mathematical modeling, proof under explicit assumptions, and translating geometric structure between space and frequency.", zh: "抽象数学建模，在明确假设下证明结论，并在空间与频域之间理解几何结构。" },
    keywords: [
      { term: { en: "Frequency domain", zh: "频域" }, meaning: { en: "Describing a function through its oscillations at different frequencies.", zh: "通过不同频率的振荡描述函数。" } },
      { term: { en: "Anisotropy", zh: "各向异性" }, meaning: { en: "Different directions follow different scaling rules.", zh: "不同方向遵循不同的伸缩规律。" } },
      { term: { en: "Hardy spaces", zh: "Hardy 空间" }, meaning: { en: "Function spaces that capture cancellation and behavior across scales.", zh: "刻画消失矩与多尺度行为的一类函数空间。" } },
    ],
  },
  campanato: {
    name: { en: "Campanato spaces", zh: "Campanato 空间" },
    why: { en: "What remains depends on the trend removed and the region examined. The paper connects this local oscillation to Hardy-space duality and equivalent function-space characterizations.", zh: "去掉什么趋势、观察哪个区域，决定了剩下怎样的振荡。论文将这种局部振荡与 Hardy 空间对偶及函数空间的等价刻画联系起来。" },
    skills: { en: "Building a general function-space framework and proving connections between local oscillation, duality and multiscale characterizations.", zh: "建立一般函数空间框架，证明局部振荡、对偶关系与多尺度刻画之间的联系。" },
    keywords: [
      { term: { en: "Local oscillation", zh: "局部振荡" }, meaning: { en: "Variation remaining after a polynomial trend is removed on a region.", zh: "在一个区域去掉多项式趋势后剩下的变化。" } },
      { term: { en: "Scale", zh: "尺度" }, meaning: { en: "The size and geometry of the region on which variation is measured.", zh: "衡量变化时所用区域的大小和几何形状。" } },
      { term: { en: "Duality", zh: "对偶性" }, meaning: { en: "Identifying all continuous linear measurements of one space through another space.", zh: "用另一个空间刻画某个空间上全部连续线性泛函。" } },
    ],
  },
};
