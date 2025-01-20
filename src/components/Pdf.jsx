import {
  Document,
  Text,
  Page,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer"
import PropTypes from "prop-types"
import { useState } from "react"

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  leftSection: {
    flexDirection: "column",
    padding: 20,
    flexGrow: 1,
    width: "30%",
    backgroundColor: "#2E5077",
    gap: "1rem",
    color: "#ffffff",
  },
  rightSection: {
    flexDirection: "column",
    padding: 20,
    flexGrow: 1,
    width: "60%",
    gap: "1rem",
  },
  avatar: {
    border: "3 solid #ffffff",
    alignSelf: "center",
    verticalAalign: "middle",
    width: 100,
    height: 100,
    borderRadius: "50%",
    marginTop: 20,
  },
  avatarImage: {
    width: "auto",
    height: "auto",
    flexShrink: 0,
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "top center",
  },
  contentSection: {
    gap: ".5rem",
  },
  content: {
    flexDirection: "row",
    fontSize: "12",
    gap: ".5rem",
    alignItems: "center",
    color: "#B7B7B7",
  },
  icon: {
    width: "16",
    height: "16",
  },
  educationContent: {
    fontSize: "12",
    gap: ".5rem",
    color: "#B7B7B7",
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "15",
    marginTop: 20,
    height: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  bullet: {
    fontSize: 10,
    marginLeft: 10,
    marginBottom: 5,
  },
})

const Pdf = ({ saved = false }) => {
  const [formData, setFormData] = useState("")
  if (saved) {
    fetch("http://localhost:3000/formData/1")
      .then((response) => response.json())
      .then((data) => {
        return setFormData(data)
      })
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.leftSection}>
            <View style={styles.avatar}>
              <Image style={styles.avatarImage} src={formData.image} />
            </View>
            <Text style={{ borderBottom: "2 solid #B7B7B7" }}>CONTACT</Text>

            <View style={styles.contentSection}>
              <View style={styles.content}>
                <Image style={styles.icon} src={"src/assets/phone.png"} />
                <Text>{formData.phone}</Text>
              </View>
              <View style={styles.content}>
                <Image style={styles.icon} src={"src/assets/email.png"} />
                <Text>{formData.email}</Text>
              </View>
              <View style={styles.content}>
                <Image style={styles.icon} src={"src/assets/adress.png"} />
                <Text>123 Somewhere, some city</Text>
              </View>
              <View style={styles.content}>
                <Image style={styles.icon} src={"src/assets/website.png"} />
                <Text>www.website.com</Text>
              </View>
            </View>
            <Text style={{ borderBottom: "2 solid #B7B7B7" }}>EDUCATION</Text>
            <View style={styles.contentSection}>
              <View style={styles.educationContent}>
                <Text>
                  {formData.SchoolStartDate}-{formData.SchoolFinishDate}
                </Text>
                <Text>{formData.school}</Text>
                <Text>• {formData.field}</Text>
              </View>
              <hr />
              <View style={styles.educationContent}>
                <Text>2035-2039</Text>
                <Text>UNIVERSITY OF SOMEPLACE</Text>
                <Text>• Bachelor of Business</Text>
                <Text>• GPA: 3.8/4.0</Text>
              </View>
            </View>
          </View>
          <View style={styles.rightSection}>
            <View style={styles.header}>
              <Text style={{ fontSize: 36, color: "#2E5077" }}>
                {formData.name}
              </Text>
              <Text style={{ fontSize: 28, color: "#5E686D" }}>
                {formData.position}
              </Text>
            </View>
            <View style={{ gap: ".5rem" }}>
              <Text
                style={{ color: "#2E5077", borderBottom: "2 solid #5E686D" }}
              >
                PROFILE
              </Text>
              <Text style={{ color: "#5E686D", fontSize: 12 }}>
                {formData.profile}
              </Text>
            </View>

            <View style={{ gap: ".5rem" }}>
              <Text
                style={{ color: "#2E5077", borderBottom: "2 solid #5E686D" }}
              >
                WORK EXPERIENCE
              </Text>
              <View style={{ color: "#5E686D", fontSize: 12 }}>
                <Text style={styles.title}>{formData.position}</Text>
                <Text style={styles.subtitle}>{formData.company}</Text>
                <Text style={styles.text}>
                  {formData.JobStartDate}-{formData.JobFinishDate}
                </Text>
                <Text>{formData.responsibilities}</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    )
  }
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.leftSection}>
          <View style={styles.avatar}>
            <Image
              style={styles.avatarImage}
              src={"src/assets/placeholderimg.jpg"}
            />
          </View>
          <Text style={{ borderBottom: "2 solid #B7B7B7" }}>CONTACT</Text>

          <View style={styles.contentSection}>
            <View style={styles.content}>
              <Image style={styles.icon} src={"src/assets/phone.png"} />
              <Text>+123-345-678</Text>
            </View>
            <View style={styles.content}>
              <Image style={styles.icon} src={"src/assets/email.png"} />
              <Text>JohnDoe123@mail.com</Text>
            </View>
            <View style={styles.content}>
              <Image style={styles.icon} src={"src/assets/adress.png"} />
              <Text>123 Somewhere, some city</Text>
            </View>
            <View style={styles.content}>
              <Image style={styles.icon} src={"src/assets/website.png"} />
              <Text>www.website.com</Text>
            </View>
          </View>
          <Text style={{ borderBottom: "2 solid #B7B7B7" }}>EDUCATION</Text>
          <View style={styles.contentSection}>
            <View style={styles.educationContent}>
              <Text>2039-2040</Text>
              <Text>UNIVERSITY OF SOMEPLACE</Text>
              <Text>• Master of Business Management</Text>
            </View>
            <hr />
            <View style={styles.educationContent}>
              <Text>2035-2039</Text>
              <Text>UNIVERSITY OF SOMEPLACE</Text>
              <Text>• Bachelor of Business</Text>
              <Text>• GPA: 3.8/4.0</Text>
            </View>
          </View>
        </View>
        <View style={styles.rightSection}>
          <View style={styles.header}>
            <Text style={{ fontSize: 36, color: "#2E5077" }}>JOHN DOE</Text>
            <Text style={{ fontSize: 28, color: "#5E686D" }}>
              Marketing Manager
            </Text>
          </View>
          <View style={{ gap: ".5rem" }}>
            <Text style={{ color: "#2E5077", borderBottom: "2 solid #5E686D" }}>
              PROFILE
            </Text>
            <Text style={{ color: "#5E686D", fontSize: 12 }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              atque maiores beatae incidunt esse, soluta reiciendis dolorum
              quibusdam voluptatem itaque, cumque eius non asperiores magni.
              Earum laborum excepturi eum et. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptate tempora illum adipisci quo
              totam, non fugiat cum minus neque recusandae illo perferendis
              animi dicta iusto quos odio, voluptatum unde rerum.
            </Text>
          </View>

          <View style={{ gap: ".5rem" }}>
            <Text style={{ color: "#2E5077", borderBottom: "2 solid #5E686D" }}>
              WORK EXPERIENCE
            </Text>
            <View style={{ color: "#5E686D", fontSize: 12 }}>
              <Text style={styles.title}>Marketing Manager</Text>
              <Text style={styles.subtitle}>XYZ Company, City, State</Text>
              <Text style={styles.text}>Month 20XX – Present</Text>
              <Text style={styles.bullet}>
                - Developed and executed comprehensive marketing strategies to
                drive brand awareness, customer engagement, and revenue growth
                across multiple channels, including digital, social media,
                email, and events.
              </Text>
              <Text style={styles.bullet}>
                - Led a team of 5 marketing professionals, providing mentorship,
                setting performance goals, and ensuring alignment with company
                objectives.
              </Text>
              <Text style={styles.bullet}>
                - Managed a $500K annual marketing budget, optimizing spend to
                achieve a 25% increase in ROI year-over-year.
              </Text>
              <Text style={styles.bullet}>
                - Spearheaded the launch of 3 successful product campaigns,
                resulting in a 40% increase in sales within the first quarter.
              </Text>
              <Text style={styles.bullet}>
                - Conducted market research and competitive analysis to identify
                trends, customer needs, and opportunities for growth.
              </Text>
              <Text style={styles.bullet}>
                - Collaborated with cross-functional teams, including sales,
                product development, and design, to ensure cohesive messaging
                and brand consistency.
              </Text>
              <Text style={styles.bullet}>
                - Implemented data-driven decision-making processes, utilizing
                analytics tools (e.g., Google Analytics, HubSpot) to track
                campaign performance and adjust strategies in real-time.
              </Text>
              <Text style={styles.bullet}>
                - Increased social media following by 60% through targeted
                content strategies and influencer partnerships.
              </Text>
              <Text style={styles.bullet}>
                - Organized and managed high-profile industry events, generating
                over 200 qualified leads and strengthening relationships with
                key stakeholders.
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

Pdf.propTypes = {
  saved: PropTypes.bool,
}

export default Pdf
