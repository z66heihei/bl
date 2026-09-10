import { useState } from "react";
import {
  Apple,
  ArrowRight,
  Check,
  Download,
  FileText,
  Leaf,
  ShieldCheck,
  Users,
} from "lucide-react";

const basePath = import.meta.env.BASE_URL;
const iconPath = `${basePath}assets/product-icon.png`;
const downloadPath = `${basePath}download/博领智享.mobileconfig`;

const values = [
  { icon: ShieldCheck, title: "品质安心", text: "专注羊乳健康" },
  { icon: Leaf, title: "生活更好", text: "营养滋养每一天" },
  { icon: Users, title: "全民健康", text: "让更多中国人喝上好羊奶" },
];

const steps = [
  { number: "01", icon: Download, title: "点击下载", text: "点击上方下载按钮，获取描述文件。" },
  { number: "02", icon: FileText, title: "安装描述文件", text: "在系统提示下完成描述文件安装。" },
  { number: "03", icon: Check, title: "打开博领智享", text: "安装完成后，在桌面打开即可使用。" },
];

export function App() {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const handleDownload = () => setDownloadStarted(true);

  return (
    <main className="page-shell">
      <header className="site-header" aria-label="主导航">
        <a className="brand" href="#top" aria-label="博领智享首页">
          <img src={iconPath} alt="博领智享图标" />
          <span>
            <strong>博领智享</strong>
            <small>好羊奶 · 好生活</small>
          </span>
        </a>
        <nav className="site-nav">
          <a href="#values">产品优势</a>
          <a href="#steps">下载使用</a>
          <a href="#about">关于我们</a>
        </nav>
        <a className="header-download" href={downloadPath} download onClick={handleDownload}>立即下载</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">源于纯粹&nbsp;&nbsp;·&nbsp;&nbsp;为更健康的生活</p>
          <h1>喝好羊奶，<br />过好生活</h1>
          <p className="hero-description">以羊乳生产销售为主，普及全民喝羊奶，健康强壮中国人。</p>
          <a className="primary-download" href={downloadPath} download onClick={handleDownload}>
            <Download size={23} strokeWidth={2.5} aria-hidden="true" />
            <span>下载博领智享</span>
          </a>
          <div className="ios-note">
            <Apple size={24} strokeWidth={2.2} aria-hidden="true" />
            <span>
              iOS 用户请先安装我们提供的描述文件（配置文件）
              <small>安装完成后即可正常使用博领智享。</small>
            </span>
          </div>
          <p className="download-status" aria-live="polite">
            {downloadStarted ? "描述文件已开始下载，请按提示完成安装。" : ""}
          </p>
        </div>

        <div className="hero-art" aria-label="博领智享产品图标">
          <div className="hero-art-backdrop" aria-hidden="true" />
          <img className="hero-icon" src={iconPath} alt="" />
          <div className="hero-wordmark">
            <strong>博领智享</strong>
            <span>好羊奶&nbsp;&nbsp; 好生活</span>
          </div>
        </div>
      </section>

      <section className="value-strip" id="values" aria-label="产品优势">
        {values.map(({ icon: Icon, title, text }) => (
          <article className="value-item" key={title}>
            <span className="value-icon" aria-hidden="true"><Icon size={22} strokeWidth={2.1} /></span>
            <span><strong>{title}</strong><small>{text}</small></span>
          </article>
        ))}
      </section>

      <section className="steps-section" id="steps">
        <div className="section-heading">
          <p className="section-kicker">DOWNLOAD GUIDE</p>
          <h2>简单三步，轻松开启博领智享</h2>
          <p>iOS 用户需先安装描述文件，按以下步骤即可完成安装。</p>
        </div>
        <div className="steps-list">
          {steps.map(({ number, icon: Icon, title, text }, index) => (
            <article className="step-item" key={number}>
              <span className="step-number">{number}</span>
              <span className="step-icon" aria-hidden="true"><Icon size={25} strokeWidth={2.1} /></span>
              <span className="step-copy"><strong>{title}</strong><small>{text}</small></span>
              {index < steps.length - 1 ? <ArrowRight className="step-arrow" size={24} aria-hidden="true" /> : null}
            </article>
          ))}
        </div>
        <a className="file-link" href={downloadPath} download onClick={handleDownload}>
          <FileText size={17} aria-hidden="true" /> 下载描述文件 <ArrowRight size={16} aria-hidden="true" />
        </a>
      </section>

      <footer className="site-footer" id="about">
        <span>博领智享 · 让更多中国人喝上好羊奶</span>
        <span>安全 · 官方 · 放心下载</span>
      </footer>
    </main>
  );
}
