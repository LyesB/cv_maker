import { Document, Page, View, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

const CvTemplate = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View></View>
      </Page>
    </Document>
  )
}

export default CvTemplate
