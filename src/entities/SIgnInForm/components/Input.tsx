import './Input.css'
const requiredImg = require('./ic_required_1.svg')

export const Input = () => {
  return (
    <div className="signin__input-block">
      <input className="signin__input"/>
      <p className="signin__input-name">Почта <img src={requiredImg} className="signin__input-span" alt='required'/></p>
      <button className="signin__input-button" />
    </div>
  )
}
