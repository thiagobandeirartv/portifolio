export type Category = "Todos" | "Direção de Fotografia" | "Operação de Câmera" | "Gaffer" | "Produção" | "Edição de Vídeo";

export interface Project {
  id: string;
  title: string;
  client: string;
  roles: string[];
  categories: Category[];
  videoId: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "VT 10 anos de Engenharia",
    client: "Thiago Bandeira",
    roles: ["Dir. de Fotografia"],
    categories: ["Direção de Fotografia"],
    videoId: "Mdkzm7v2vc8",
    tags: ["4K PRO", "NEW"]
  },
  {
    id: "2",
    title: "Documentário WELL",
    client: "WELL",
    roles: ["Dir. Agência", "Dir. Fotografia"],
    categories: ["Direção de Fotografia"],
    videoId: "D8IE251bp_E",
    tags: ["DOC MODE", "NEW"]
  },
  {
    id: "3",
    title: "Meu Respirar",
    client: "Gabriella Stehling",
    roles: ["Dir. de Fotografia", "Op. de Câmera"],
    categories: ["Direção de Fotografia", "Operação de Câmera"],
    videoId: "WeBx8Ewkm4I",
    tags: ["4K RAW", "NEW"]
  },
  {
    id: "4",
    title: "Jeová Jireh",
    client: "Gabriella Stehling",
    roles: ["Dir. de Fotografia", "Op. de Câmera"],
    categories: ["Direção de Fotografia", "Operação de Câmera"],
    videoId: "rQlMRuub6vo",
    tags: ["4K RAW", "NEW"]
  },
  {
    id: "5",
    title: "NEle (Live Session)",
    client: "Coral Canção Jovem",
    roles: ["Op. de Câmera"],
    categories: ["Operação de Câmera"],
    videoId: "vptKdSzSw0Y",
    tags: ["LIVE SESSION", "NEW"]
  },
  {
    id: "6",
    title: "Tu És",
    client: "Produção Audiovisual",
    roles: ["Dir. de Fotografia", "Op. de Câmera"],
    categories: ["Direção de Fotografia", "Operação de Câmera"],
    videoId: "yrkck9BhKqo",
    tags: ["M. CLIPE", "NEW"]
  },
  {
    id: "7",
    title: "Culto de Sexta UNASP",
    client: "UNASP",
    roles: ["Dir. de Imagem", "Coord. Técnico"],
    categories: ["Produção", "Direção de Fotografia"],
    videoId: "5FxSxY7iMo0",
    tags: ["LIVE", "REC"]
  },
  {
    id: "8",
    title: "Sabores do Brasil",
    client: "Santa Helena Alimentos",
    roles: ["Op. de Câmera"],
    categories: ["Operação de Câmera"],
    videoId: "RJpcS7dLJPQ",
    tags: ["DOC MODE", "4K"]
  },
  {
    id: "9",
    title: "Aula Magna 2026",
    client: "UNASP",
    roles: ["Op. de Câmera"],
    categories: ["Operação de Câmera"],
    videoId: "DXB_N4-r-H8",
    tags: ["LIVE", "REC"]
  },
  {
    id: "10",
    title: "Uma Pátria",
    client: "Coro de Licenciatura em Música",
    roles: ["Op. de Câmera"],
    categories: ["Operação de Câmera"],
    videoId: "wl8Lc5n71jQ",
    tags: ["M. CLIPE", "REC"]
  },
  {
    id: "11",
    title: "As Estrelas",
    client: "Coral Canção Jovem",
    roles: ["Op. de Câmera"],
    categories: ["Operação de Câmera"],
    videoId: "THiRhQtPTKw",
    tags: ["M. CLIPE", "CAM A"]
  },
  {
    id: "12",
    title: "Formaturas UNASP EC 2025",
    client: "UNASP",
    roles: ["Op. de Câmera"],
    categories: ["Operação de Câmera"],
    videoId: "708nWQhWdfE",
    tags: ["INSTITUCIONAL", "4K"]
  },
  {
    id: "13",
    title: "O Oráculo",
    client: "Califórnia Dreams",
    roles: ["Diretor", "Dir. de Fotografia"],
    categories: ["Direção de Fotografia"],
    videoId: "efa_PSKMHLk",
    tags: ["4.6K RAW", "24FPS"]
  },
  {
    id: "14",
    title: "A Terra Santa",
    client: "Museu de Arqueologia Bíblica",
    roles: ["Dir. de Fotografia", "Op. de Câmera"],
    categories: ["Direção de Fotografia", "Operação de Câmera"],
    videoId: "WKTqguahTMU",
    tags: ["DOC MODE", "4K"]
  },
  {
    id: "15",
    title: "Lembra",
    client: "Kati Carvalho & Communion",
    roles: ["Produtor"],
    categories: ["Produção"],
    videoId: "DAglqbQTK4c",
    tags: ["M. CLIPE", "REC"]
  },
  {
    id: "16",
    title: "O Peso das Palavras",
    client: "Entre Aspas",
    roles: ["Op. de Câmera", "Produção"],
    categories: ["Operação de Câmera", "Produção"],
    videoId: "h5vbvGte3oM",
    tags: ["4K RAW", "24FPS"]
  },
  {
    id: "17",
    title: "Nunca É Tarde",
    client: "Novo Tom",
    roles: ["Gaffer"],
    categories: ["Gaffer"],
    videoId: "m93qBGgcTsI",
    tags: ["M. CLIPE", "RUN"]
  },
  {
    id: "18",
    title: "Santificado",
    client: "Novo Tom",
    roles: ["Gaffer"],
    categories: ["Gaffer"],
    videoId: "-homFYaw7z8",
    tags: ["M. CLIPE", "CAM A"]
  },
  {
    id: "19",
    title: "O Melhor de Mim",
    client: "Grupo Versos",
    roles: ["Dir. de Fotografia", "Produtor Técnico"],
    categories: ["Direção de Fotografia", "Produção"],
    videoId: "D43qNYNIIOA",
    tags: ["M. CLIPE", "ON"]
  },
  {
    id: "20",
    title: "Herói da Fé",
    client: "UNASP 75 Anos",
    roles: ["Produção de Palco"],
    categories: ["Produção"],
    videoId: "0gXPzkrl0cA",
    tags: ["MAKING OF", "DOC"]
  },
  {
    id: "21",
    title: "Cicatrizes",
    client: "Califórnia Dreams",
    roles: ["Op. de Câmera", "Diretor de Produção"],
    categories: ["Operação de Câmera", "Produção"],
    videoId: "NwesZCYbSx0",
    tags: ["DOC MODE", "60FPS"]
  },
  {
    id: "22",
    title: "Ele Reviveu",
    client: "Produção Audiovisual",
    roles: ["Diretor de Produção"],
    categories: ["Produção"],
    videoId: "b1ufVsXLPt8",
    tags: ["M. CLIPE", "SYNC"]
  },
  {
    id: "23",
    title: "Oh, Que Esperança",
    client: "Orquestra Sinfônica UNASP",
    roles: ["Assist. de Câmera"],
    categories: ["Operação de Câmera"],
    videoId: "GevwTHA0SDA",
    tags: ["M. CLIPE", "RUN"]
  },
  {
    id: "24",
    title: "Oh, Fronte Ensanguentada",
    client: "Orquestra Sinfônica UNASP",
    roles: ["Assist. de Câmera"],
    categories: ["Operação de Câmera"],
    videoId: "hYmDMIVQ4Og",
    tags: ["M. CLIPE", "CAM A"]
  },
  {
    id: "25",
    title: "Bem Junto a Cristo",
    client: "Orquestra Sinfônica UNASP",
    roles: ["Assist. de Câmera"],
    categories: ["Operação de Câmera"],
    videoId: "LPSdRoq1EJs",
    tags: ["M. CLIPE", "REC"]
  },
  {
    id: "26",
    title: "Arte Na Mesa #06",
    client: "UNASP",
    roles: ["Op. de Câmera"],
    categories: ["Operação de Câmera"],
    videoId: "g73nHqXJY-M",
    tags: ["PODCAST", "REC"]
  },
  {
    id: "27",
    title: "Arte Na Mesa #05",
    client: "UNASP",
    roles: ["Op. de Câmera"],
    categories: ["Operação de Câmera"],
    videoId: "vP7nbYS_DgY",
    tags: ["PODCAST", "REC"]
  },
  {
    id: "28",
    title: "Bárbara",
    client: "Califórnia Dreams",
    roles: ["Diretor", "Op. de Câmera", "Produtor Técnico"],
    categories: ["Direção de Fotografia", "Operação de Câmera", "Produção"],
    videoId: "p6SIYQ2c2Bw",
    tags: ["PRORES 422", "24FPS"]
  },
  {
    id: "29",
    title: "Arte Na Mesa #02",
    client: "UNASP",
    roles: ["Op. de Câmera"],
    categories: ["Operação de Câmera"],
    videoId: "yh_ZZTQN3-I",
    tags: ["PODCAST", "REC"]
  },
  {
    id: "30",
    title: "Saudade",
    client: "Califórnia Dreams",
    roles: ["Op. de Câmera"],
    categories: ["Operação de Câmera"],
    videoId: "Mul19Lfeo7Y",
    tags: ["PRORES 4444", "FROZEN"]
  },
  {
    id: "31",
    title: "Nosso Jeito de Amar",
    client: "Música",
    roles: ["Op. de Câmera", "Produtor"],
    categories: ["Operação de Câmera", "Produção"],
    videoId: "RRfgyZBCGn4",
    tags: ["DOC", "REC"]
  }
];
