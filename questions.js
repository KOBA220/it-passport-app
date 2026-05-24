const questions = [

  // 単語問題
  {
    type: "単語",
    question: "OSI参照モデル第3層として正しいものは？",
    choices: [
      {
        text: "物理層",
        isCorrect: false,
        explanation: "物理層は第1層です。"
      },
      {
        text: "ネットワーク層",
        isCorrect: true,
        explanation: "ネットワーク層は第3層です。"
      },
      {
        text: "セッション層",
        isCorrect: false,
        explanation: "セッション層は第5層です。"
      },
      {
        text: "プレゼンテーション層",
        isCorrect: false,
        explanation: "プレゼンテーション層は第6層です。"
      }
    ]
  },

  // 最適問題
  {
    type: "最適問題",
    question: "情報漏洩対策として最も適切なものは？",
    choices: [
      {
        text: "パスワード共有",
        isCorrect: false,
        explanation: "共有は危険です。"
      },
      {
        text: "アクセス制御",
        isCorrect: true,
        explanation: "アクセス権限制御は有効です。"
      },
      {
        text: "USB配布",
        isCorrect: false,
        explanation: "漏洩リスクがあります。"
      },
      {
        text: "共通ID利用",
        isCorrect: false,
        explanation: "不適切です。"
      }
    ]
  },

  // 正誤問題
  {
    type: "正誤問題",
    question: "HTTPは暗号化通信を行う。",
    choices: [
      {
        text: "正しい",
        isCorrect: false,
        explanation: "暗号化するのはHTTPSです。"
      },
      {
        text: "正しくない",
        isCorrect: true,
        explanation: "HTTPは暗号化されません。"
      }
    ]
  },

  // 過去問
  {
    type: "過去問",
    year: "令和5年",
    question: "データベース管理システムの役割として適切なものは？",
    choices: [
      {
        text: "画像編集",
        isCorrect: false,
        explanation: "DBMSの役割ではありません。"
      },
      {
        text: "データ管理",
        isCorrect: true,
        explanation: "DBMSはデータ管理を行います。"
      },
      {
        text: "動画配信",
        isCorrect: false,
        explanation: "DBMSではありません。"
      },
      {
        text: "印刷制御",
        isCorrect: false,
        explanation: "DBMSではありません。"
      }
    ]
  }

];