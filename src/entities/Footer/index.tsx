import { useNavigate } from 'react-router-dom'
import './index.css'
export const Footer = ({ footerQuestion, footerAnswer }: { footerQuestion: string, footerAnswer:string }) => {

  const navigate = useNavigate()

  return (
    <div className="signin__footer">
      <p className="signin__footer-text">{footerQuestion}{' '}<span className="signin__footer-span" onClick={() => navigate('/signup')}>{footerAnswer}</span></p>
    </div>
  )
}
