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
  },

  {
    question: "IPv6のアドレス長は？",
    choices: [
      {
        text: "32bit",
        isCorrect: false,
        explanation: "32bitはIPv4です。"
      },
      {
        text: "64bit",
        isCorrect: false,
        explanation: "IPv6ではありません。"
      },
      {
        text: "128bit",
        isCorrect: true,
        explanation: "IPv6は128bitです。"
      },
      {
        text: "256bit",
        isCorrect: false,
        explanation: "IPv6は256bitではありません。"
      }
    ]
  },

  {
    question: "SQLでデータを取得する命令は？",
    choices: [
      {
        text: "INSERT",
        isCorrect: false,
        explanation: "INSERTはデータ追加です。"
      },
      {
        text: "UPDATE",
        isCorrect: false,
        explanation: "UPDATEはデータ更新です。"
      },
      {
        text: "DELETE",
        isCorrect: false,
        explanation: "DELETEはデータ削除です。"
      },
      {
        text: "SELECT",
        isCorrect: true,
        explanation: "SELECTはデータ取得です。"
      }
    ]
  },

  {
    question: "情報セキュリティの3要素に含まれないものは？",
    choices: [
      {
        text: "機密性",
        isCorrect: false,
        explanation: "情報を秘密に保つことです。"
      },
      {
        text: "完全性",
        isCorrect: false,
        explanation: "改ざん防止です。"
      },
      {
        text: "可用性",
        isCorrect: false,
        explanation: "利用可能な状態を保つことです。"
      },
      {
        text: "収益性",
        isCorrect: true,
        explanation: "収益性は情報セキュリティの3要素ではありません。"
      }
    ]
  },

  {
    question: "コンピュータウイルス対策ソフトの目的は？",
    choices: [
      {
        text: "通信速度向上",
        isCorrect: false,
        explanation: "通信速度向上が主目的ではありません。"
      },
      {
        text: "マルウェア検知",
        isCorrect: true,
        explanation: "ウイルスやマルウェアを検知します。"
      },
      {
        text: "印刷高速化",
        isCorrect: false,
        explanation: "印刷とは関係ありません。"
      },
      {
        text: "画面共有",
        isCorrect: false,
        explanation: "画面共有機能ではありません。"
      }
    ]
  },

  {
    question: "OSの役割として正しいものは？",
    choices: [
      {
        text: "動画編集",
        isCorrect: false,
        explanation: "アプリケーション側の役割です。"
      },
      {
        text: "ハードウェア管理",
        isCorrect: true,
        explanation: "OSはハードウェアや資源を管理します。"
      },
      {
        text: "Webページ制作",
        isCorrect: false,
        explanation: "OSの役割ではありません。"
      },
      {
        text: "SNS投稿",
        isCorrect: false,
        explanation: "OSの役割ではありません。"
      }
    ]
  },

  {
    question: "HTTPS通信で使用されるプロトコルは？",
    choices: [
      {
        text: "SSL/TLS",
        isCorrect: true,
        explanation: "HTTPSはSSL/TLSで暗号化します。"
      },
      {
        text: "FTP",
        isCorrect: false,
        explanation: "FTPはファイル転送です。"
      },
      {
        text: "SMTP",
        isCorrect: false,
        explanation: "SMTPはメール送信です。"
      },
      {
        text: "SNMP",
        isCorrect: false,
        explanation: "SNMPはネットワーク監視です。"
      }
    ]
  },

  {
    question: "CPUの役割として正しいものは？",
    choices: [
      {
        text: "データ保存",
        isCorrect: false,
        explanation: "保存はストレージです。"
      },
      {
        text: "演算処理",
        isCorrect: true,
        explanation: "CPUは演算や制御を行います。"
      },
      {
        text: "印刷",
        isCorrect: false,
        explanation: "印刷装置ではありません。"
      },
      {
        text: "通信暗号化",
        isCorrect: false,
        explanation: "CPU専用機能ではありません。"
      }
    ]
  },

  {
    question: "クラウドサービスでSaaSに分類されるものは？",
    choices: [
      {
        text: "Gmail",
        isCorrect: true,
        explanation: "GmailはSaaSです。"
      },
      {
        text: "AWS EC2",
        isCorrect: false,
        explanation: "EC2はIaaSです。"
      },
      {
        text: "Docker",
        isCorrect: false,
        explanation: "SaaSではありません。"
      },
      {
        text: "Linux",
        isCorrect: false,
        explanation: "OSです。"
      }
    ]
  }

];
