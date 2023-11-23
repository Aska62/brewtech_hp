import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

function LangBar() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="language-bar">
      <div className={`lang-btn lang-btn_en ${language === 'en' ? 'lang-btn_selected':''}`} onClick={()=>setLanguage('en')}>EN</div>
      <div className={`lang-btn lang-btn_jp ${language === 'jp' ? 'lang-btn_selected':''}`} onClick={()=>setLanguage('jp')}>JP</div>
      <div className={`lang-btn lang-btn_jp ${language === 'cn' ? 'lang-btn_selected':''}`}  onClick={()=>setLanguage('cn')}>CN</div>
    </div>
  )
}

export default LangBar