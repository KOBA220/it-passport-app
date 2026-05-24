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
  },
  
  {
  question: "LANで機器を接続する際によく使用される機器は？",
  choices: [
    {
      text: "スイッチ",
      isCorrect: true,
      explanation: "LAN内接続にはスイッチがよく使用されます。"
    },
    {
      text: "プリンタ",
      isCorrect: false,
      explanation: "接続機器ですが中継機器ではありません。"
    },
    {
      text: "スキャナ",
      isCorrect: false,
      explanation: "入力装置です。"
    },
    {
      text: "ディスプレイ",
      isCorrect: false,
      explanation: "表示装置です。"
    }
  ]
},

{
  question: "メール送信に使われるプロトコルは？",
  choices: [
    {
      text: "SMTP",
      isCorrect: true,
      explanation: "SMTPはメール送信で使用されます。"
    },
    {
      text: "HTTP",
      isCorrect: false,
      explanation: "HTTPはWeb通信です。"
    },
    {
      text: "FTP",
      isCorrect: false,
      explanation: "FTPはファイル転送です。"
    },
    {
      text: "DNS",
      isCorrect: false,
      explanation: "DNSは名前解決です。"
    }
  ]
},

{
  question: "IPアドレスを自動割当する仕組みは？",
  choices: [
    {
      text: "DNS",
      isCorrect: false,
      explanation: "DNSは名前解決です。"
    },
    {
      text: "DHCP",
      isCorrect: true,
      explanation: "DHCPはIPアドレスを自動割当します。"
    },
    {
      text: "ARP",
      isCorrect: false,
      explanation: "ARPはMACアドレス解決です。"
    },
    {
      text: "NTP",
      isCorrect: false,
      explanation: "NTPは時刻同期です。"
    }
  ]
},

{
  question: "データを暗号化する目的は？",
  choices: [
    {
      text: "通信速度向上",
      isCorrect: false,
      explanation: "速度向上ではありません。"
    },
    {
      text: "機密性確保",
      isCorrect: true,
      explanation: "情報漏洩防止が目的です。"
    },
    {
      text: "容量削減",
      isCorrect: false,
      explanation: "圧縮ではありません。"
    },
    {
      text: "印刷高速化",
      isCorrect: false,
      explanation: "関係ありません。"
    }
  ]
},

{
  question: "DBMSの役割は？",
  choices: [
    {
      text: "データ管理",
      isCorrect: true,
      explanation: "DBMSはデータベース管理を行います。"
    },
    {
      text: "画像編集",
      isCorrect: false,
      explanation: "画像編集ソフトではありません。"
    },
    {
      text: "動画配信",
      isCorrect: false,
      explanation: "関係ありません。"
    },
    {
      text: "電源管理",
      isCorrect: false,
      explanation: "OSやBIOSの役割です。"
    }
  ]
},

{
  question: "1Byteは何bit？",
  choices: [
    {
      text: "4bit",
      isCorrect: false,
      explanation: "4bitではありません。"
    },
    {
      text: "8bit",
      isCorrect: true,
      explanation: "1Byte = 8bitです。"
    },
    {
      text: "16bit",
      isCorrect: false,
      explanation: "16bitではありません。"
    },
    {
      text: "32bit",
      isCorrect: false,
      explanation: "32bitではありません。"
    }
  ]
},

{
  question: "ブラウザに該当するものは？",
  choices: [
    {
      text: "Excel",
      isCorrect: false,
      explanation: "表計算ソフトです。"
    },
    {
      text: "Chrome",
      isCorrect: true,
      explanation: "ChromeはWebブラウザです。"
    },
    {
      text: "PowerPoint",
      isCorrect: false,
      explanation: "プレゼンソフトです。"
    },
    {
      text: "Word",
      isCorrect: false,
      explanation: "文書作成ソフトです。"
    }
  ]
},

{
  question: "プログラムの不具合を何という？",
  choices: [
    {
      text: "バグ",
      isCorrect: true,
      explanation: "不具合はバグと呼ばれます。"
    },
    {
      text: "パッチ",
      isCorrect: false,
      explanation: "修正プログラムです。"
    },
    {
      text: "ドライバ",
      isCorrect: false,
      explanation: "制御ソフトです。"
    },
    {
      text: "ライセンス",
      isCorrect: false,
      explanation: "利用許諾です。"
    }
  ]
},

{
  question: "ファイアウォールの役割は？",
  choices: [
    {
      text: "印刷管理",
      isCorrect: false,
      explanation: "関係ありません。"
    },
    {
      text: "不正通信遮断",
      isCorrect: true,
      explanation: "外部からの不正アクセスを防ぎます。"
    },
    {
      text: "動画編集",
      isCorrect: false,
      explanation: "関係ありません。"
    },
    {
      text: "電源供給",
      isCorrect: false,
      explanation: "関係ありません。"
    }
  ]
},

{
  question: "クラウドの特徴として適切なものは？",
  choices: [
    {
      text: "インターネット経由で利用",
      isCorrect: true,
      explanation: "クラウドはネット経由で利用します。"
    },
    {
      text: "紙で管理",
      isCorrect: false,
      explanation: "クラウドではありません。"
    },
    {
      text: "LAN専用",
      isCorrect: false,
      explanation: "LAN限定ではありません。"
    },
    {
      text: "オフライン専用",
      isCorrect: false,
      explanation: "通常オンライン利用です。"
    }
  ]
},

{
  question: "URLの説明として正しいものは？",
  choices: [
    {
      text: "Webページの場所",
      isCorrect: true,
      explanation: "URLはWeb上の位置情報です。"
    },
    {
      text: "CPUの型番",
      isCorrect: false,
      explanation: "関係ありません。"
    },
    {
      text: "暗号化方式",
      isCorrect: false,
      explanation: "関係ありません。"
    },
    {
      text: "画像形式",
      isCorrect: false,
      explanation: "関係ありません。"
    }
  ]
},

{
  question: "IoTの説明として正しいものは？",
  choices: [
    {
      text: "モノをネット接続する",
      isCorrect: true,
      explanation: "IoTはモノのインターネットです。"
    },
    {
      text: "動画編集技術",
      isCorrect: false,
      explanation: "関係ありません。"
    },
    {
      text: "暗号化技術",
      isCorrect: false,
      explanation: "関係ありません。"
    },
    {
      text: "印刷技術",
      isCorrect: false,
      explanation: "関係ありません。"
    }
  ]
},

{
  question: "AIの正式名称は？",
  choices: [
    {
      text: "Artificial Intelligence",
      isCorrect: true,
      explanation: "AIは人工知能です。"
    },
    {
      text: "Automatic Internet",
      isCorrect: false,
      explanation: "違います。"
    },
    {
      text: "Advanced Input",
      isCorrect: false,
      explanation: "違います。"
    },
    {
      text: "Applied Interface",
      isCorrect: false,
      explanation: "違います。"
    }
  ]
},

{
  question: "USBメモリの役割は？",
  choices: [
    {
      text: "データ保存",
      isCorrect: true,
      explanation: "USBメモリは記憶装置です。"
    },
    {
      text: "通信暗号化",
      isCorrect: false,
      explanation: "主目的ではありません。"
    },
    {
      text: "CPU制御",
      isCorrect: false,
      explanation: "関係ありません。"
    },
    {
      text: "画面表示",
      isCorrect: false,
      explanation: "関係ありません。"
    }
  ]
},

{
  question: "Webページを作成する言語は？",
  choices: [
    {
      text: "HTML",
      isCorrect: true,
      explanation: "HTMLはWebページ作成言語です。"
    },
    {
      text: "SQL",
      isCorrect: false,
      explanation: "SQLはDB言語です。"
    },
    {
      text: "SMTP",
      isCorrect: false,
      explanation: "メール送信プロトコルです。"
    },
    {
      text: "FTP",
      isCorrect: false,
      explanation: "ファイル転送です。"
    }
  ]
}

];
