const questions = [
    {
      question: "OSI参照モデル第3層は？",
      choices: [
        {
          text: "物理層",
          isCorrect: false,
          explanation: "物理層は第1層です。"
        },
        {
          text: "データリンク層",
          isCorrect: false,
          explanation: "データリンク層は第2層です。"
        },
        {
          text: "ネットワーク層",
          isCorrect: true,
          explanation: "正解です。IPアドレスによる経路制御を行います。"
        },
        {
          text: "セッション層",
          isCorrect: false,
          explanation: "セッション層は第5層です。"
        }
      ]
    },
  
    {
      question: "HTTPでWebページを取得する際に使用するポート番号は？",
      choices: [
        {
          text: "21",
          isCorrect: false,
          explanation: "21番はFTPです。"
        },
        {
          text: "25",
          isCorrect: false,
          explanation: "25番はSMTPです。"
        },
        {
          text: "80",
          isCorrect: true,
          explanation: "正解です。HTTPは80番ポートを使用します。"
        },
        {
          text: "443",
          isCorrect: false,
          explanation: "443番はHTTPSです。"
        }
      ]
    }
  ];