import { LocalizedText } from "../types";

interface ResearchStory {
  question: LocalizedText;
  answer: LocalizedText;
  contribution: LocalizedText;
  guide: LocalizedText;
}

export const researchStories: Record<string, ResearchStory> = {
  watermark: {
    question: { en: "Can two text collections reveal a shared watermark key?", zh: "没有密钥，能看出两组文本共享同一水印配置吗？" },
    answer: { en: "A watermark helps a key holder identify generated text. I study a different question: whether an outsider can link two text collections through the statistical traces of a reused key.", zh: "水印帮助持有密钥的一方识别生成文本。我研究另一个问题：外部观察者能否通过复用密钥留下的统计痕迹，把两组文本关联起来。" },
    contribution: { en: "This project develops a statistical formulation and reference-based testing approach for watermark linkability. It separates authorized detection strength from the evidence available to a keyless observer, and studies the role of shared contexts and text budget.", zh: "这项工作建立水印可关联性的统计问题与基于参考集合的检验思路，区分授权检测者的检测强度与无密钥观察者能获得的证据，并研究共享上下文和文本量的作用。" },
    guide: { en: "Compare the constructed collections and change the context width. The counter illustrates what a collision is; it does not decide whether a real key was reused.", zh: "比较两组构造文本，并改变上下文长度。计数器解释碰撞是什么，不用于判断真实密钥是否复用。" },
  },
  validation: {
    question: { en: "Where does a simulator disagree with real measurements?", zh: "仿真模型究竟在哪些条件下偏离真实观测？" },
    answer: { en: "A model can follow the overall trend and still miss an important part of the input range. We test both the whole range and individual regions, so the question is not only whether a discrepancy exists, but where to investigate it.", zh: "模型可能抓住了整体趋势，却在某些输入条件下出现偏差。我们同时检验整体范围和局部区域，让判断从“模型有没有偏差”进一步走向“应该检查哪里”。" },
    contribution: { en: "Our Fourier Maximum Modulus Test combines a fitted model discrepancy with frequency-domain testing. In the shear-layer application, it detects disagreement over the full Mach-number range (p < 0.01) and provides separate tests for six regions.", zh: "我们提出 Fourier 最大模检验，将拟合得到的模型偏差与频域检验结合。在剪切层案例中，整体 Mach 数范围的检验发现显著差异（p < 0.01），同时给出六个局部区域各自的检验结果。" },
    guide: { en: "Start at the top left: blue dots and the red curve describe physical measurements; hollow dots and the black curve describe the simulator. Then look at the bottom right: bars below the dashed 0.05 line indicate rejection in the corresponding test. The last region does not reject; that is not proof of agreement. The top-right density panel shows where observations are concentrated.", zh: "先看左上：蓝点和红线对应物理观测，空心点和黑线对应模拟器。再看右下：低于 0.05 虚线的柱对应拒绝原假设的检验。最后一个区域未拒绝，但这不能证明模型与真实过程一致。右上的密度图帮助理解观测集中在哪些输入位置。" },
  },
  calibration: {
    question: { en: "When no setting fits perfectly, what makes a parameter the best one?", zh: "模型怎么调都不能完全吻合时，什么才是“最好的参数”？" },
    answer: { en: "The answer depends on what we want the simulator to match: values, rates of change, or another measure of discrepancy. Calibration needs an explicit target before its parameter estimates and uncertainty can be interpreted.", zh: "答案取决于我们希望模型匹配什么：观测值、变化趋势，还是其他误差度量。先明确校准目标，参数估计及其不确定性才有清楚的含义。" },
    contribution: { en: "Our framework defines these targets using a chosen Hilbert-space norm and puts their estimation in one formulation. Under the stated regularity conditions, it also gives plug-in uncertainty quantification. A 19-observation ion-channel example shows how the choice of target changes fitted parameters.", zh: "我们用选定的 Hilbert 空间范数定义目标，把多种校准方法放进同一个估计框架，并在明确的正则条件下量化不确定性。一个包含 19 个观测的离子通道案例展示了目标选择如何改变参数估计。" },
    guide: { en: "Black dots are measured currents; colored curves come from the same simulator calibrated under different objectives. Inspect where the curves depart from the dots, then switch to Parameter intervals: visually similar fits can give different parameter estimates. A closer fit under one metric does not make that metric the right scientific target.", zh: "黑点是电流观测，彩色曲线来自同一个模拟器在不同目标下的校准。先比较曲线与观测的偏离，再切到“参数区间”：看起来相近的拟合，也可能给出不同的参数。某一种度量下拟合更近，不代表它一定是科学问题中合适的目标。" },
  },
  fourier: {
    question: { en: "How does stretching different directions change a function’s spectrum?", zh: "沿不同方向拉伸，会怎样改变函数的频谱？" },
    answer: { en: "A stretch in space produces a corresponding compression in frequency. When directions stretch at different rates, that geometry matters for how we describe both the function and its Fourier transform.", zh: "空间中的拉伸会带来频域中的相应压缩。不同方向的拉伸速度不同时，必须把这种几何结构纳入对函数及其 Fourier 变换的描述。" },
    contribution: { en: "The paper goes beyond this picture: under its assumptions on the underlying function space, it proves that the Fourier transform of an anisotropic Hardy-space distribution has a continuous representative, and derives pointwise estimates and Hardy–Littlewood inequalities.", zh: "论文的贡献超出了这个直观图像：在对底层函数空间的假设下，我们证明各向异性 Hardy 空间中分布的 Fourier 变换具有连续函数代表，并导出逐点估计与 Hardy–Littlewood 不等式。" },
    guide: { en: "The left panel shows a concrete function in space; the right shows its Fourier magnitude. Increase k and compare how their shapes change on fixed axes. Color records function value on the left and normalized magnitude on the right. This example explains the dilation geometry; the theorem applies to a much broader class of distributions.", zh: "左图是一个具体函数的空间形状，右图是 Fourier 变换的模。增大 k，在固定坐标轴下比较两边形状如何变化。左侧颜色表示函数值，右侧表示归一化后的频域模。这个例子解释伸缩几何；论文定理处理的是更广泛的分布。" },
  },
  campanato: {
    question: { en: "What variation remains after removing a local trend?", zh: "去掉局部趋势之后，还剩下怎样的变化？" },
    answer: { en: "An overall slope can hide smaller variations. Fit a simple polynomial on a region and subtract it: the residual isolates the part that the local trend does not explain. Changing the region or polynomial changes what is treated as a trend.", zh: "整体斜率可能掩盖更细小的变化。在一个区域内拟合简单多项式，再将它减去，残差就显示局部趋势无法解释的部分。区域和多项式次数的选择，决定了哪些变化被当作趋势。" },
    contribution: { en: "The paper builds a function-space theory around this local oscillation: it identifies anisotropic ball Campanato-type spaces as duals of associated Hardy spaces, and gives Littlewood–Paley and Carleson measure characterizations under the stated assumptions.", zh: "论文围绕这种局部振荡建立函数空间理论：在相应假设下，确定各向异性球 Campanato 型空间与 Hardy 空间的对偶关系，并给出 Littlewood–Paley 和 Carleson 测度刻画。" },
    guide: { en: "Read left to right: the original function, its fitted polynomial, then the residual. Switch from degree 0 (constant) to degree 1 (affine trend) and inspect what is removed. The three panels share one color scale within each view. The reported RMS summarizes one region, not the full Campanato norm.", zh: "从左向右看：原函数、拟合的多项式、两者之差。将次数从 0（常数）切到 1（仿射趋势），观察被去掉的部分。同一视图的三幅图共用色标。显示的 RMS 只概括一个区域的残差，不是完整的 Campanato 范数。" },
  },
};
