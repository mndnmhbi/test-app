
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const el = document.getElementById('root')
const root = createRoot(el)

export function App() {

    const name = 'ماندانا محبی'
    const date = new Date()

    const today = date.toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    const time = date.toLocaleTimeString('fa-IR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })

    return (
        <div className="page">

            <div className="aero-card">

                <div className="card-icon">☁️</div>

                <p className="welcome">
                    سلام! خوش آمدید
                </p>

                <h1>{name}</h1>

                <div className="divider"></div>

                <p className="lesson">
                    تمرین جلسه اول
                </p>

                <div className="date-box">

                    <div className="date-item">
                        <span>📅</span>
                        <p>{today}</p>
                    </div>

                    <div className="date-item">
                        <span>🕒</span>
                        <p>{time}</p>
                    </div>

                </div>

                <div className="card-footer">
                    React Learning Journey
                </div>

            </div>

        </div>
    )
}

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
