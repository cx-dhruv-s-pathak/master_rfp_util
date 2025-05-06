import "./landing.css"
import { useState } from "react"
import axios from "axios"
import RfpModal from "../components/RfpModal"

const Landing = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalContent, setModalContent] = useState('')

  const handleButtonClick = async (category) => {
    try {
      const res = await axios.get(`http://localhost:3000/rfp/v1?category=${encodeURIComponent(category)}`)
      console.log(res)
      setModalTitle(`${category} RFP Questions`)
      console.log(res.data)
      console.log(typeof res.data.content)
      setModalContent(res.data.content)
      setModalVisible(true)
    } catch (err) {
      // setModalTitle('Error')
      // setModalContent('Failed to load data.')
      // setModalVisible(true)
      setModalTitle(`${category} RFP Questions`)
      setModalContent(res.data.questions)  // ✅ Correct key
      setModalVisible(true)

    }
  };

  return (
    <div className="container">
      <header>
        <h1>Checkmarx One</h1>
        <p>Unified application security platform from code to cloud</p>
      </header>

      <main>
        <div className="main-grid">

          <section className="box-group">
            <div className="box-title purple">Insights</div>
            <div className="box-content">
              <button onClick={() => handleButtonClick("Unified dashboard & reporting")}>Unified dashboard & reporting</button>
              <button onClick={() => handleButtonClick("Cloud Insights")}>Cloud Insights</button>
            </div>
          </section>

          <section className="box-group">
            <div className="box-title purple">Posture</div>
            <div className="box-content">
              <button onClick={() => handleButtonClick("ASPM")}>Application Security Posture Management (ASPM)</button>
            </div>
          </section>

          <div className="row-grid">
            <section className="box-group">
              <div className="box-title purple">Code</div>
              <div className="box-content">
                <button onClick={() => handleButtonClick("SAST")}>SAST</button>
              </div>
              <div className="box-content">
                <button onClick={() => handleButtonClick("API")}>API security</button>
              </div>
              <div className="box-content">
                <button onClick={() => handleButtonClick("DAST")}>DAST</button>
              </div>
            </section>

            <section className="box-group">
              <div className="box-title purple">Supply Chain</div>
              <div className="box-content">
                <button onClick={() => handleButtonClick("SCA")}>SCA</button>
              </div>
              <div className="box-content">
                <button onClick={() => handleButtonClick("Malicious")}>Malicious Packages</button>
              </div>
              <div className="box-content">
                <button onClick={() => handleButtonClick("Secret")}>Secret Detection</button>
              </div>
              <div className="box-content">
                <button onClick={() => handleButtonClick("Repository")}>Repository Health</button>
              </div>
              <div className="box-content">
                <button onClick={() => handleButtonClick("AI")}>AI Security</button>
              </div>
            </section>

            <section className="box-group">
              <div className="box-title purple">Cloud</div>
              <div className="box-content">
                <button onClick={() => handleButtonClick("Container")}>Container Security</button>
              </div>
              <div className="box-content">
                <button onClick={() => handleButtonClick("IaC")}>IaC Security</button>
              </div>
            </section>

            <section className="box-group">
              <div className="box-title cyan">Partners</div>
              <div className="box-content">
                <button onClick={() => handleButtonClick("Cloud Insights")}>Cloud Insights</button>
              </div>
              <div className="box-content">
                <button onClick={() => handleButtonClick("Runtime Protection")}>Runtime Protection</button>
              </div>
            </section>
          </div>

          <section className="box-group">
            <div className="box-title purple">Dev Enablement</div>
            <div className="box-content">
              <button onClick={() => handleButtonClick("Codebashing")}>Codebashing</button>
            </div>
            <div className="box-content">
              <button onClick={() => handleButtonClick("AI Security Champion")}>AI Security Champion</button>
            </div>
          </section>

          <section className="box-group">
            <div className="box-title teal">DevSecOps</div>
            <div className="box-content">
              <button onClick={() => handleButtonClick("Tech Stack Support")}>75+ technologies and languages, 100+ frameworks</button>
              <button onClick={() => handleButtonClick("SDLC Integrations")}>SDLC Integrations</button>
            </div>
          </section>
        </div>

        <aside className="sidebar">
          <div className="box-title blue">AI-Powered</div>
          <div className="box-content">
            <button onClick={() => handleButtonClick("ChatGPT")}>ChatGPT</button>
          </div>
          <div className="box-content">
            <button onClick={() => handleButtonClick("GitHub Copilot")}>GitHub Copilot</button>
          </div>
          <div className="box-content">
            <button onClick={() => handleButtonClick("Query Builder")}>Query Builder</button>
          </div>
          <div className="box-content">
            <button onClick={() => handleButtonClick("Auto Remediation")}>Auto Remediation</button>
          </div>
          <div className="box-content">
            <button onClick={() => handleButtonClick("Leakage Protection")}>Leakage Protection</button>
          </div>
        </aside>
      </main>

      <RfpModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title={modalTitle}
        content={modalContent}
      />
    </div>
  )
}

export default Landing
