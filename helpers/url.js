let urls = {}
if (typeof window !== "undefined") {
  urls = {
    home: window.location.origin
  }
}
export default urls