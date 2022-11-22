export default function handler(
  req,
  res
) {
  res.status(200).json({ links: [
    {
        name: "Home",
        path: "/",
        icon: "fa-solid fa-house mr-1"
    },
    {
      name: "Information",
      path: "/info/pvp-system",
      icon: "fa-solid fa-book mr-1",
      special: true,
      special_type: 'info'
    },
    {
      name: "Servers",
      path: "/servers",
      icon: "fa-solid fa-hard-drive mr-1"
    },
    {
      name: "Shop",
      path: "https://arkclassic.tebex.io/",
      icon: "fa-solid fa-shop mr-1"
    },
    {
      name: "Support",
      path: "/support",
      icon: "fa-solid fa-comment mr-1"
    },
  ] })
}
