export function formattedURL(text) {
  return text.replace(/[áàãâÀÁÃÂÄ]/g, 'a').replace(/[éèêëÉÈÊË]/g, 'e').replace(/[íìîïÍÌÎÏ]/g, 'i').replace(/[óòõôöÒÓÔÖÕ]/g, 'o').replace(/[úùûüÙÚÛÜ]/g, 'u').replace(/[çÇ]/g, 'c').replace(/ /g, '-')
}