import { useState } from "react"
import { PDFViewer } from "@react-pdf/renderer"
import Pdf from "/home/lyes/repos/cv_maker/src/components/Pdf.jsx"
import "/home/lyes/repos/cv_maker/src/App.css"

function FormInput() {
  const [saved, setSaved] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [selectedImg, setSelectedImg] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSaved(true)
    setDisabled(!disabled)
    const formData = new FormData(e.target)

    const formValues = Object.fromEntries(formData)

    fetch("http://localhost:3000/formData/1", {
      method: "PATCH",
      body: JSON.stringify({
        image: selectedImg,
        name: formValues.name,
        email: formValues.email,
        phone: formValues.phone,
        shcool: formValues.shcool,
        field: formValues.field,
        SchoolStartDate: formValues.startDate,
        SchoolFinishDate: formValues.endDate,
        company: formValues.company,
        position: formValues.position,
        responsibilities: formValues.responsibilities,
        JobstartDate: formValues.start,
        JobEndDate: formValues.end,
        Profile: formValues.Profile,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
      },
    }).then((response) => response.json())
  }

  const handleEdit = () => {
    setDisabled(!disabled)
  }

  const handleImgChange = (e) => {
    setSelectedImg(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <form className="root" onSubmit={handleSubmit}>
      <div className="formSection">
        <h1>General Information</h1>

        <label>Upload Image:</label>
        <input type="file" name="image" onChange={handleImgChange} />

        <label htmlFor="name">Full Name:</label>
        <input type="text" name="name" disabled={disabled} />

        <label htmlFor="email">Email:</label>
        <input type="text" name="email" disabled={disabled} />

        <label htmlFor="phone">Phone Number:</label>
        <input type="number" name="phone" disabled={disabled} />
        <h1>Education</h1>
        <label htmlFor="school">School Name:</label>
        <input type="text" name="school" disabled={disabled} />

        <label htmlFor="field">Field Of Study:</label>
        <input type="text" name="field" disabled={disabled} />

        <label htmlFor="start-date">Period From:</label>
        <input type="date" name="startDate" disabled={disabled} />

        <label htmlFor="finish-date">To:</label>
        <input type="date" name="finishdate" disabled={disabled} />
        <h1>Experience</h1>
        <label htmlFor="company-name">Company Name:</label>
        <input type="text" name="company" disabled={disabled} />

        <label htmlFor="position">Position:</label>
        <input type="text" name="position" disabled={disabled} />

        <label htmlFor="responsibilities">Main Responsibilities:</label>
        <input type="text" name="responsibilities" disabled={disabled} />

        <label htmlFor="start-date">Period From:</label>
        <input type="date" name="start" disabled={disabled} />

        <label htmlFor="finish-date">To:</label>
        <input type="date" name="end" disabled={disabled} />

        <label htmlFor="profile">Profile:</label>
        <textarea name="profile" disabled={disabled} />

        <button type="submit">Save</button>
        <button type="button" onClick={handleEdit} disabled={!disabled}>
          Edit
        </button>
      </div>
      <PDFViewer
        className="pdfSection"
        style={{ width: "100%", height: "100vh" }}
      >
        <Pdf saved={saved} />
      </PDFViewer>
    </form>
  )
}

export default FormInput
