const questions = [
  {
    "type": "単語",
    "question": "OSI参照モデル第3層として正しいものは？",
    "choices": [
      {
        "text": "物理層",
        "isCorrect": false,
        "explanation": "物理層は第1層です。"
      },
      {
        "text": "ネットワーク層",
        "isCorrect": true,
        "explanation": "ネットワーク層は第3層です。"
      },
      {
        "text": "セッション層",
        "isCorrect": false,
        "explanation": "セッション層は第5層です。"
      },
      {
        "text": "プレゼンテーション層",
        "isCorrect": false,
        "explanation": "プレゼンテーション層は第6層です。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "CPUの処理速度を表す単位として適切なものは？",
    "choices": [
      {
        "text": "Hz",
        "isCorrect": true,
        "explanation": "CPUのクロック周波数はHzで表します。"
      },
      {
        "text": "dpi",
        "isCorrect": false,
        "explanation": "dpiは画像や印刷の解像度を表す単位です。"
      },
      {
        "text": "bps",
        "isCorrect": false,
        "explanation": "bpsはデータ通信速度を表す単位です。"
      },
      {
        "text": "px",
        "isCorrect": false,
        "explanation": "pxは画素数を表す単位です。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "RAMの説明として正しいものは？",
    "choices": [
      {
        "text": "電源を切ると内容が消える主記憶装置",
        "isCorrect": true,
        "explanation": "RAMは揮発性の主記憶装置です。"
      },
      {
        "text": "読み出し専用の記憶装置",
        "isCorrect": false,
        "explanation": "読み出し専用の記憶装置はROMです。"
      },
      {
        "text": "紙に印刷する装置",
        "isCorrect": false,
        "explanation": "印刷する装置はプリンタです。"
      },
      {
        "text": "ネットワークを中継する装置",
        "isCorrect": false,
        "explanation": "ネットワークを中継する装置にはルータなどがあります。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "データベースで表の行を表す用語は？",
    "choices": [
      {
        "text": "レコード",
        "isCorrect": true,
        "explanation": "表の行はレコードと呼ばれます。"
      },
      {
        "text": "フィールド",
        "isCorrect": false,
        "explanation": "フィールドは表の列を表します。"
      },
      {
        "text": "セル",
        "isCorrect": false,
        "explanation": "セルは表計算ソフトなどで使われる一つのマスです。"
      },
      {
        "text": "インデックス",
        "isCorrect": false,
        "explanation": "インデックスは検索を高速化するための仕組みです。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "情報漏洩対策として最も適切なものは？",
    "choices": [
      {
        "text": "パスワード共有",
        "isCorrect": false,
        "explanation": "共有は危険です。"
      },
      {
        "text": "アクセス制御",
        "isCorrect": true,
        "explanation": "アクセス権限制御は有効です。"
      },
      {
        "text": "USB配布",
        "isCorrect": false,
        "explanation": "漏洩リスクがあります。"
      },
      {
        "text": "共通ID利用",
        "isCorrect": false,
        "explanation": "不適切です。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "標的型攻撃メールへの対策として最も適切なものは？",
    "choices": [
      {
        "text": "不審な添付ファイルを開く前に送信元を確認する",
        "isCorrect": true,
        "explanation": "送信元や内容を確認し、不審な添付ファイルやリンクを開かないことが重要です。"
      },
      {
        "text": "すべてのメールの添付ファイルを自動で実行する",
        "isCorrect": false,
        "explanation": "自動実行はマルウェア感染の危険があります。"
      },
      {
        "text": "パスワードをメール本文に書いて返信する",
        "isCorrect": false,
        "explanation": "パスワードをメールで送ることは不適切です。"
      },
      {
        "text": "差出人名だけを見て安全と判断する",
        "isCorrect": false,
        "explanation": "差出人名は偽装されることがあります。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "バックアップ運用として最も適切なものは？",
    "choices": [
      {
        "text": "定期的に取得し、復元できることも確認する",
        "isCorrect": true,
        "explanation": "バックアップは取得だけでなく、復元確認も重要です。"
      },
      {
        "text": "障害が発生してから初めて取得する",
        "isCorrect": false,
        "explanation": "障害後では必要なデータを保護できません。"
      },
      {
        "text": "同じPCの同じフォルダにだけ保存する",
        "isCorrect": false,
        "explanation": "同じ場所だけでは故障時に同時に失われる可能性があります。"
      },
      {
        "text": "取得後は内容を一切確認しない",
        "isCorrect": false,
        "explanation": "復元できないバックアップでは意味がありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "プロジェクトの進捗管理でガントチャートを使う目的として最も適切なものは？",
    "choices": [
      {
        "text": "作業の期間や順序を視覚的に把握する",
        "isCorrect": true,
        "explanation": "ガントチャートは作業スケジュールを横棒で表し、進捗や期間を把握しやすくします。"
      },
      {
        "text": "通信内容を暗号化する",
        "isCorrect": false,
        "explanation": "暗号化はセキュリティ対策であり、ガントチャートの目的ではありません。"
      },
      {
        "text": "データベースの正規化を行う",
        "isCorrect": false,
        "explanation": "正規化はデータベース設計の考え方です。"
      },
      {
        "text": "画像の解像度を高める",
        "isCorrect": false,
        "explanation": "画像処理とは関係ありません。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "HTTPは暗号化通信を行う。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": false,
        "explanation": "暗号化するのはHTTPSです。"
      },
      {
        "text": "正しくない",
        "isCorrect": true,
        "explanation": "HTTPは暗号化されません。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "二要素認証では、異なる種類の認証要素を組み合わせる。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "知識情報、所持情報、生体情報など異なる要素を組み合わせます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "同じ種類の要素を二つ使うだけでは二要素認証とはいえません。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "SQLは、リレーショナルデータベースを操作するために使われる言語である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "SQLはデータの検索、追加、更新、削除などに使われます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "SQLはリレーショナルデータベース操作で広く使われる言語です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "著作権は、申請や登録をしなければ発生しない。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": false,
        "explanation": "著作権は原則として著作物を創作した時点で発生します。"
      },
      {
        "text": "正しくない",
        "isCorrect": true,
        "explanation": "登録しなくても創作時に発生するのが基本です。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和5年",
    "question": "データベース管理システムの役割として適切なものは？",
    "choices": [
      {
        "text": "画像編集",
        "isCorrect": false,
        "explanation": "DBMSの役割ではありません。"
      },
      {
        "text": "データ管理",
        "isCorrect": true,
        "explanation": "DBMSはデータ管理を行います。"
      },
      {
        "text": "動画配信",
        "isCorrect": false,
        "explanation": "DBMSではありません。"
      },
      {
        "text": "印刷制御",
        "isCorrect": false,
        "explanation": "DBMSではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和4年",
    "question": "PDCAサイクルのAに該当するものは？",
    "choices": [
      {
        "text": "Act",
        "isCorrect": true,
        "explanation": "PDCAのAはActで、改善を意味します。"
      },
      {
        "text": "Analyze",
        "isCorrect": false,
        "explanation": "PDCAのAはAnalyzeではありません。"
      },
      {
        "text": "Access",
        "isCorrect": false,
        "explanation": "AccessはPDCAの構成要素ではありません。"
      },
      {
        "text": "Apply",
        "isCorrect": false,
        "explanation": "PDCAのAはApplyではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和3年",
    "question": "情報セキュリティの三要素に含まれないものは？",
    "choices": [
      {
        "text": "機密性",
        "isCorrect": false,
        "explanation": "機密性は情報セキュリティの三要素に含まれます。"
      },
      {
        "text": "完全性",
        "isCorrect": false,
        "explanation": "完全性は情報セキュリティの三要素に含まれます。"
      },
      {
        "text": "可用性",
        "isCorrect": false,
        "explanation": "可用性は情報セキュリティの三要素に含まれます。"
      },
      {
        "text": "拡張性",
        "isCorrect": true,
        "explanation": "拡張性は三要素には含まれません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和2年",
    "question": "損益分岐点売上高を下げる方法として適切なものは？",
    "choices": [
      {
        "text": "固定費を削減する",
        "isCorrect": true,
        "explanation": "固定費を削減すると、損益分岐点売上高は下がります。"
      },
      {
        "text": "固定費を増やす",
        "isCorrect": false,
        "explanation": "固定費が増えると損益分岐点売上高は上がります。"
      },
      {
        "text": "販売単価を下げ、変動費率を上げる",
        "isCorrect": false,
        "explanation": "利益率が下がるため、損益分岐点売上高は上がりやすくなります。"
      },
      {
        "text": "変動費率を上げる",
        "isCorrect": false,
        "explanation": "変動費率が上がると限界利益率が下がり、損益分岐点売上高は上がります。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "CPUの説明として正しいものは？",
    "choices": [
      {
        "text": "コンピュータの演算や制御を行う装置",
        "isCorrect": true,
        "explanation": "CPUは中央処理装置で、演算や制御を担当します。"
      },
      {
        "text": "印刷を行う装置",
        "isCorrect": false,
        "explanation": "印刷を行う装置は正解ではありません。"
      },
      {
        "text": "通信回線を暗号化する装置",
        "isCorrect": false,
        "explanation": "通信回線を暗号化する装置は正解ではありません。"
      },
      {
        "text": "画像を紙に読み取る装置",
        "isCorrect": false,
        "explanation": "画像を紙に読み取る装置は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "ROMの説明として正しいものは？",
    "choices": [
      {
        "text": "電源を切っても内容が保持される読み出し中心の記憶装置",
        "isCorrect": true,
        "explanation": "ROMは不揮発性の記憶装置です。"
      },
      {
        "text": "電源を切ると内容が消える主記憶装置",
        "isCorrect": false,
        "explanation": "電源を切ると内容が消える主記憶装置は正解ではありません。"
      },
      {
        "text": "通信速度を測る単位",
        "isCorrect": false,
        "explanation": "通信速度を測る単位は正解ではありません。"
      },
      {
        "text": "表計算ソフトの関数",
        "isCorrect": false,
        "explanation": "表計算ソフトの関数は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "SSDの説明として正しいものは？",
    "choices": [
      {
        "text": "半導体メモリを使った補助記憶装置",
        "isCorrect": true,
        "explanation": "SSDは半導体メモリを使う補助記憶装置です。"
      },
      {
        "text": "音声を出力する装置",
        "isCorrect": false,
        "explanation": "音声を出力する装置は正解ではありません。"
      },
      {
        "text": "ネットワークを分割する装置",
        "isCorrect": false,
        "explanation": "ネットワークを分割する装置は正解ではありません。"
      },
      {
        "text": "画面の明るさを測る単位",
        "isCorrect": false,
        "explanation": "画面の明るさを測る単位は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "LANの説明として正しいものは？",
    "choices": [
      {
        "text": "限られた範囲のネットワーク",
        "isCorrect": true,
        "explanation": "LANは社内や家庭など比較的狭い範囲のネットワークです。"
      },
      {
        "text": "世界規模のネットワーク",
        "isCorrect": false,
        "explanation": "世界規模のネットワークは正解ではありません。"
      },
      {
        "text": "暗号化の方式",
        "isCorrect": false,
        "explanation": "暗号化の方式は正解ではありません。"
      },
      {
        "text": "売上分析の手法",
        "isCorrect": false,
        "explanation": "売上分析の手法は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "WANの説明として正しいものは？",
    "choices": [
      {
        "text": "離れた拠点間を結ぶ広域ネットワーク",
        "isCorrect": true,
        "explanation": "WANは広い範囲を結ぶネットワークです。"
      },
      {
        "text": "同一室内だけの記憶装置",
        "isCorrect": false,
        "explanation": "同一室内だけの記憶装置は正解ではありません。"
      },
      {
        "text": "データベースの列",
        "isCorrect": false,
        "explanation": "データベースの列は正解ではありません。"
      },
      {
        "text": "画像編集ソフト",
        "isCorrect": false,
        "explanation": "画像編集ソフトは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "IPアドレスの説明として正しいものは？",
    "choices": [
      {
        "text": "ネットワーク上の機器を識別する番号",
        "isCorrect": true,
        "explanation": "IPアドレスはネットワーク上の宛先識別に使います。"
      },
      {
        "text": "ファイルを圧縮する方式",
        "isCorrect": false,
        "explanation": "ファイルを圧縮する方式は正解ではありません。"
      },
      {
        "text": "画面表示の色数",
        "isCorrect": false,
        "explanation": "画面表示の色数は正解ではありません。"
      },
      {
        "text": "会計上の利益率",
        "isCorrect": false,
        "explanation": "会計上の利益率は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "DNSの説明として正しいものは？",
    "choices": [
      {
        "text": "ドメイン名とIPアドレスを対応付ける仕組み",
        "isCorrect": true,
        "explanation": "DNSは名前解決を行う仕組みです。"
      },
      {
        "text": "ファイルを暗号化する規格",
        "isCorrect": false,
        "explanation": "ファイルを暗号化する規格は正解ではありません。"
      },
      {
        "text": "CPUの温度を下げる部品",
        "isCorrect": false,
        "explanation": "CPUの温度を下げる部品は正解ではありません。"
      },
      {
        "text": "利益を計算する表",
        "isCorrect": false,
        "explanation": "利益を計算する表は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "URLの説明として正しいものは？",
    "choices": [
      {
        "text": "Web上の資源の場所を示す表記",
        "isCorrect": true,
        "explanation": "URLはWebページなどの場所を示します。"
      },
      {
        "text": "利用者の権限一覧",
        "isCorrect": false,
        "explanation": "利用者の権限一覧は正解ではありません。"
      },
      {
        "text": "画像の圧縮率",
        "isCorrect": false,
        "explanation": "画像の圧縮率は正解ではありません。"
      },
      {
        "text": "在庫商品の原価",
        "isCorrect": false,
        "explanation": "在庫商品の原価は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "HTTPSの説明として正しいものは？",
    "choices": [
      {
        "text": "HTTPに暗号化を加えた通信",
        "isCorrect": true,
        "explanation": "HTTPSはTLSなどで通信を暗号化します。"
      },
      {
        "text": "紙文書を電子化する処理",
        "isCorrect": false,
        "explanation": "紙文書を電子化する処理は正解ではありません。"
      },
      {
        "text": "無線LANのチャンネル番号",
        "isCorrect": false,
        "explanation": "無線LANのチャンネル番号は正解ではありません。"
      },
      {
        "text": "売上を予測する会計手法",
        "isCorrect": false,
        "explanation": "売上を予測する会計手法は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "ファイアウォールの説明として正しいものは？",
    "choices": [
      {
        "text": "通信を監視し許可・遮断を行う仕組み",
        "isCorrect": true,
        "explanation": "ファイアウォールは不正な通信の防止に役立ちます。"
      },
      {
        "text": "文字を拡大する機能",
        "isCorrect": false,
        "explanation": "文字を拡大する機能は正解ではありません。"
      },
      {
        "text": "画像の色を補正する機能",
        "isCorrect": false,
        "explanation": "画像の色を補正する機能は正解ではありません。"
      },
      {
        "text": "帳票を印刷する機能",
        "isCorrect": false,
        "explanation": "帳票を印刷する機能は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "マルウェアの説明として正しいものは？",
    "choices": [
      {
        "text": "悪意のあるソフトウェアの総称",
        "isCorrect": true,
        "explanation": "ウイルスやランサムウェアなどはマルウェアに含まれます。"
      },
      {
        "text": "正規のバックアップ媒体",
        "isCorrect": false,
        "explanation": "正規のバックアップ媒体は正解ではありません。"
      },
      {
        "text": "通信速度の単位",
        "isCorrect": false,
        "explanation": "通信速度の単位は正解ではありません。"
      },
      {
        "text": "売上管理の手法",
        "isCorrect": false,
        "explanation": "売上管理の手法は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "フィッシングの説明として正しいものは？",
    "choices": [
      {
        "text": "偽サイトなどで情報をだまし取る攻撃",
        "isCorrect": true,
        "explanation": "フィッシングは偽装によりIDやパスワードを盗む攻撃です。"
      },
      {
        "text": "正規の暗号化通信",
        "isCorrect": false,
        "explanation": "正規の暗号化通信は正解ではありません。"
      },
      {
        "text": "データベースの結合",
        "isCorrect": false,
        "explanation": "データベースの結合は正解ではありません。"
      },
      {
        "text": "工程表の作成",
        "isCorrect": false,
        "explanation": "工程表の作成は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "ランサムウェアの説明として正しいものは？",
    "choices": [
      {
        "text": "データを暗号化し身代金を要求するマルウェア",
        "isCorrect": true,
        "explanation": "ランサムウェアはデータを使えなくして金銭を要求します。"
      },
      {
        "text": "画像を圧縮するソフト",
        "isCorrect": false,
        "explanation": "画像を圧縮するソフトは正解ではありません。"
      },
      {
        "text": "会議を予約する機能",
        "isCorrect": false,
        "explanation": "会議を予約する機能は正解ではありません。"
      },
      {
        "text": "通信経路を最適化する装置",
        "isCorrect": false,
        "explanation": "通信経路を最適化する装置は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "認証の説明として正しいものは？",
    "choices": [
      {
        "text": "利用者が本人であることを確認すること",
        "isCorrect": true,
        "explanation": "認証は本人確認の手続きです。"
      },
      {
        "text": "不要データを完全に削除すること",
        "isCorrect": false,
        "explanation": "不要データを完全に削除することは正解ではありません。"
      },
      {
        "text": "売上を月別に集計すること",
        "isCorrect": false,
        "explanation": "売上を月別に集計することは正解ではありません。"
      },
      {
        "text": "画面を印刷すること",
        "isCorrect": false,
        "explanation": "画面を印刷することは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "認可の説明として正しいものは？",
    "choices": [
      {
        "text": "認証済み利用者に操作権限を与えること",
        "isCorrect": true,
        "explanation": "認可はアクセス権限の付与や制御です。"
      },
      {
        "text": "電源を切ること",
        "isCorrect": false,
        "explanation": "電源を切ることは正解ではありません。"
      },
      {
        "text": "データを圧縮すること",
        "isCorrect": false,
        "explanation": "データを圧縮することは正解ではありません。"
      },
      {
        "text": "画面を拡大すること",
        "isCorrect": false,
        "explanation": "画面を拡大することは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "暗号化の説明として正しいものは？",
    "choices": [
      {
        "text": "第三者に内容を読まれにくく変換すること",
        "isCorrect": true,
        "explanation": "暗号化は情報の機密性を守る手段です。"
      },
      {
        "text": "CPUを高速化すること",
        "isCorrect": false,
        "explanation": "CPUを高速化することは正解ではありません。"
      },
      {
        "text": "売上を予測すること",
        "isCorrect": false,
        "explanation": "売上を予測することは正解ではありません。"
      },
      {
        "text": "ファイル名を短くすること",
        "isCorrect": false,
        "explanation": "ファイル名を短くすることは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "公開鍵暗号方式の説明として正しいものは？",
    "choices": [
      {
        "text": "暗号化と復号で異なる鍵を使う方式",
        "isCorrect": true,
        "explanation": "公開鍵暗号方式では公開鍵と秘密鍵を使います。"
      },
      {
        "text": "常に同じ鍵だけを使う方式",
        "isCorrect": false,
        "explanation": "常に同じ鍵だけを使う方式は正解ではありません。"
      },
      {
        "text": "パスワードを共有する方式",
        "isCorrect": false,
        "explanation": "パスワードを共有する方式は正解ではありません。"
      },
      {
        "text": "通信を記録しない方式",
        "isCorrect": false,
        "explanation": "通信を記録しない方式は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "共通鍵暗号方式の説明として正しいものは？",
    "choices": [
      {
        "text": "暗号化と復号で同じ鍵を使う方式",
        "isCorrect": true,
        "explanation": "共通鍵暗号方式では同じ鍵を安全に共有する必要があります。"
      },
      {
        "text": "公開鍵だけで復号する方式",
        "isCorrect": false,
        "explanation": "公開鍵だけで復号する方式は正解ではありません。"
      },
      {
        "text": "鍵を使わない方式",
        "isCorrect": false,
        "explanation": "鍵を使わない方式は正解ではありません。"
      },
      {
        "text": "画像だけを対象にする方式",
        "isCorrect": false,
        "explanation": "画像だけを対象にする方式は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "デジタル署名の説明として正しいものは？",
    "choices": [
      {
        "text": "本人性と改ざん有無の確認に使う技術",
        "isCorrect": true,
        "explanation": "デジタル署名はなりすましや改ざん検知に役立ちます。"
      },
      {
        "text": "通信速度を上げる技術",
        "isCorrect": false,
        "explanation": "通信速度を上げる技術は正解ではありません。"
      },
      {
        "text": "画面を明るくする技術",
        "isCorrect": false,
        "explanation": "画面を明るくする技術は正解ではありません。"
      },
      {
        "text": "在庫数を減らす技術",
        "isCorrect": false,
        "explanation": "在庫数を減らす技術は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "ハッシュ値の説明として正しいものは？",
    "choices": [
      {
        "text": "データから一定長で生成される値",
        "isCorrect": true,
        "explanation": "ハッシュ値は改ざん検知などに使われます。"
      },
      {
        "text": "画面の縦横比",
        "isCorrect": false,
        "explanation": "画面の縦横比は正解ではありません。"
      },
      {
        "text": "印刷用の紙サイズ",
        "isCorrect": false,
        "explanation": "印刷用の紙サイズは正解ではありません。"
      },
      {
        "text": "売上の税込価格",
        "isCorrect": false,
        "explanation": "売上の税込価格は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "バックアップの説明として正しいものは？",
    "choices": [
      {
        "text": "データを複製して障害に備えること",
        "isCorrect": true,
        "explanation": "バックアップは障害や誤削除への備えです。"
      },
      {
        "text": "不要な通信を増やすこと",
        "isCorrect": false,
        "explanation": "不要な通信を増やすことは正解ではありません。"
      },
      {
        "text": "パスワードを共有すること",
        "isCorrect": false,
        "explanation": "パスワードを共有することは正解ではありません。"
      },
      {
        "text": "画像をぼかすこと",
        "isCorrect": false,
        "explanation": "画像をぼかすことは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "クラウドサービスの説明として正しいものは？",
    "choices": [
      {
        "text": "インターネット経由で利用するサービス",
        "isCorrect": true,
        "explanation": "クラウドサービスはネットワーク経由で資源や機能を利用します。"
      },
      {
        "text": "社内だけで使う紙台帳",
        "isCorrect": false,
        "explanation": "社内だけで使う紙台帳は正解ではありません。"
      },
      {
        "text": "電源ケーブルの規格",
        "isCorrect": false,
        "explanation": "電源ケーブルの規格は正解ではありません。"
      },
      {
        "text": "画面解像度の単位",
        "isCorrect": false,
        "explanation": "画面解像度の単位は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "SaaSの説明として正しいものは？",
    "choices": [
      {
        "text": "ソフトウェアをインターネット経由で利用する形態",
        "isCorrect": true,
        "explanation": "SaaSはアプリケーションをサービスとして利用します。"
      },
      {
        "text": "回線そのものを貸す形態",
        "isCorrect": false,
        "explanation": "回線そのものを貸す形態は正解ではありません。"
      },
      {
        "text": "CPUを製造する方式",
        "isCorrect": false,
        "explanation": "CPUを製造する方式は正解ではありません。"
      },
      {
        "text": "紙文書を保管する制度",
        "isCorrect": false,
        "explanation": "紙文書を保管する制度は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "IaaSの説明として正しいものは？",
    "choices": [
      {
        "text": "サーバやストレージなどの基盤を利用する形態",
        "isCorrect": true,
        "explanation": "IaaSはITインフラをサービスとして利用します。"
      },
      {
        "text": "完成済み業務アプリだけを使う形態",
        "isCorrect": false,
        "explanation": "完成済み業務アプリだけを使う形態は正解ではありません。"
      },
      {
        "text": "画像形式の一種",
        "isCorrect": false,
        "explanation": "画像形式の一種は正解ではありません。"
      },
      {
        "text": "会計監査の手続き",
        "isCorrect": false,
        "explanation": "会計監査の手続きは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "PaaSの説明として正しいものは？",
    "choices": [
      {
        "text": "アプリ開発・実行基盤を利用する形態",
        "isCorrect": true,
        "explanation": "PaaSは開発や実行のプラットフォームを提供します。"
      },
      {
        "text": "文房具を管理する仕組み",
        "isCorrect": false,
        "explanation": "文房具を管理する仕組みは正解ではありません。"
      },
      {
        "text": "通信速度の単位",
        "isCorrect": false,
        "explanation": "通信速度の単位は正解ではありません。"
      },
      {
        "text": "利益率を表す指標",
        "isCorrect": false,
        "explanation": "利益率を表す指標は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "データベースの説明として正しいものは？",
    "choices": [
      {
        "text": "データを整理して蓄積・利用する仕組み",
        "isCorrect": true,
        "explanation": "データベースはデータ管理に使われます。"
      },
      {
        "text": "画面を投影する装置",
        "isCorrect": false,
        "explanation": "画面を投影する装置は正解ではありません。"
      },
      {
        "text": "通信ケーブルの種類",
        "isCorrect": false,
        "explanation": "通信ケーブルの種類は正解ではありません。"
      },
      {
        "text": "音声を再生する形式",
        "isCorrect": false,
        "explanation": "音声を再生する形式は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "主キーの説明として正しいものは？",
    "choices": [
      {
        "text": "表の行を一意に識別する項目",
        "isCorrect": true,
        "explanation": "主キーはレコードを一意に識別します。"
      },
      {
        "text": "表の背景色",
        "isCorrect": false,
        "explanation": "表の背景色は正解ではありません。"
      },
      {
        "text": "印刷ページ番号",
        "isCorrect": false,
        "explanation": "印刷ページ番号は正解ではありません。"
      },
      {
        "text": "通信速度",
        "isCorrect": false,
        "explanation": "通信速度は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "外部キーの説明として正しいものは？",
    "choices": [
      {
        "text": "他の表との関連を表す項目",
        "isCorrect": true,
        "explanation": "外部キーは表同士の関係を示します。"
      },
      {
        "text": "暗号化の鍵を公開する場所",
        "isCorrect": false,
        "explanation": "暗号化の鍵を公開する場所は正解ではありません。"
      },
      {
        "text": "画面の明るさ",
        "isCorrect": false,
        "explanation": "画面の明るさは正解ではありません。"
      },
      {
        "text": "CPUの製造番号",
        "isCorrect": false,
        "explanation": "CPUの製造番号は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "正規化の説明として正しいものは？",
    "choices": [
      {
        "text": "データの重複や矛盾を減らす設計",
        "isCorrect": true,
        "explanation": "正規化はデータベース設計で重要です。"
      },
      {
        "text": "画像を高画質化する処理",
        "isCorrect": false,
        "explanation": "画像を高画質化する処理は正解ではありません。"
      },
      {
        "text": "通信を暗号化する処理",
        "isCorrect": false,
        "explanation": "通信を暗号化する処理は正解ではありません。"
      },
      {
        "text": "現金を数える作業",
        "isCorrect": false,
        "explanation": "現金を数える作業は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "SQLの説明として正しいものは？",
    "choices": [
      {
        "text": "データベースを操作する言語",
        "isCorrect": true,
        "explanation": "SQLは検索や更新などに使います。"
      },
      {
        "text": "画像圧縮形式",
        "isCorrect": false,
        "explanation": "画像圧縮形式は正解ではありません。"
      },
      {
        "text": "会議室の予約方式",
        "isCorrect": false,
        "explanation": "会議室の予約方式は正解ではありません。"
      },
      {
        "text": "無線の周波数帯",
        "isCorrect": false,
        "explanation": "無線の周波数帯は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "トランザクションの説明として正しいものは？",
    "choices": [
      {
        "text": "一連の処理を一つの単位として扱うこと",
        "isCorrect": true,
        "explanation": "トランザクションは整合性を保つために使います。"
      },
      {
        "text": "画面の色を変えること",
        "isCorrect": false,
        "explanation": "画面の色を変えることは正解ではありません。"
      },
      {
        "text": "紙を裁断すること",
        "isCorrect": false,
        "explanation": "紙を裁断することは正解ではありません。"
      },
      {
        "text": "通信量の単位",
        "isCorrect": false,
        "explanation": "通信量の単位は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "排他制御の説明として正しいものは？",
    "choices": [
      {
        "text": "同時更新による不整合を防ぐ制御",
        "isCorrect": true,
        "explanation": "排他制御は複数利用者の同時処理で重要です。"
      },
      {
        "text": "画面を暗くする制御",
        "isCorrect": false,
        "explanation": "画面を暗くする制御は正解ではありません。"
      },
      {
        "text": "音量を一定にする制御",
        "isCorrect": false,
        "explanation": "音量を一定にする制御は正解ではありません。"
      },
      {
        "text": "利益率を上げる制御",
        "isCorrect": false,
        "explanation": "利益率を上げる制御は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "アルゴリズムの説明として正しいものは？",
    "choices": [
      {
        "text": "問題を解くための手順",
        "isCorrect": true,
        "explanation": "アルゴリズムは処理手順のことです。"
      },
      {
        "text": "画像ファイルの拡張子",
        "isCorrect": false,
        "explanation": "画像ファイルの拡張子は正解ではありません。"
      },
      {
        "text": "会社の会計年度",
        "isCorrect": false,
        "explanation": "会社の会計年度は正解ではありません。"
      },
      {
        "text": "通信機器の外形",
        "isCorrect": false,
        "explanation": "通信機器の外形は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "フローチャートの説明として正しいものは？",
    "choices": [
      {
        "text": "処理の流れを図で表したもの",
        "isCorrect": true,
        "explanation": "フローチャートは処理手順の表現に使います。"
      },
      {
        "text": "売上の棒グラフだけを指すもの",
        "isCorrect": false,
        "explanation": "売上の棒グラフだけを指すものは正解ではありません。"
      },
      {
        "text": "暗号鍵の保管庫",
        "isCorrect": false,
        "explanation": "暗号鍵の保管庫は正解ではありません。"
      },
      {
        "text": "通信速度の測定器",
        "isCorrect": false,
        "explanation": "通信速度の測定器は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "変数の説明として正しいものは？",
    "choices": [
      {
        "text": "プログラムで値を入れておく名前付きの領域",
        "isCorrect": true,
        "explanation": "変数には処理中の値を保持できます。"
      },
      {
        "text": "印刷用の紙",
        "isCorrect": false,
        "explanation": "印刷用の紙は正解ではありません。"
      },
      {
        "text": "通信ケーブル",
        "isCorrect": false,
        "explanation": "通信ケーブルは正解ではありません。"
      },
      {
        "text": "会計伝票",
        "isCorrect": false,
        "explanation": "会計伝票は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "配列の説明として正しいものは？",
    "choices": [
      {
        "text": "複数のデータを順序付きで扱う構造",
        "isCorrect": true,
        "explanation": "配列は複数データをまとめて扱えます。"
      },
      {
        "text": "単一の紙文書",
        "isCorrect": false,
        "explanation": "単一の紙文書は正解ではありません。"
      },
      {
        "text": "電源の種類",
        "isCorrect": false,
        "explanation": "電源の種類は正解ではありません。"
      },
      {
        "text": "会議の議事録",
        "isCorrect": false,
        "explanation": "会議の議事録は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "APIの説明として正しいものは？",
    "choices": [
      {
        "text": "ソフトウェア同士が機能を利用し合うための接点",
        "isCorrect": true,
        "explanation": "APIはプログラム間の連携に使われます。"
      },
      {
        "text": "液晶画面の明るさ",
        "isCorrect": false,
        "explanation": "液晶画面の明るさは正解ではありません。"
      },
      {
        "text": "紙の大きさ",
        "isCorrect": false,
        "explanation": "紙の大きさは正解ではありません。"
      },
      {
        "text": "売上高の略称",
        "isCorrect": false,
        "explanation": "売上高の略称は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "アジャイル開発の説明として正しいものは？",
    "choices": [
      {
        "text": "短い期間で反復しながら開発する手法",
        "isCorrect": true,
        "explanation": "アジャイル開発は反復的に改善しながら進めます。"
      },
      {
        "text": "一度だけ計画し変更しない手法",
        "isCorrect": false,
        "explanation": "一度だけ計画し変更しない手法は正解ではありません。"
      },
      {
        "text": "紙だけで管理する手法",
        "isCorrect": false,
        "explanation": "紙だけで管理する手法は正解ではありません。"
      },
      {
        "text": "通信を暗号化する方式",
        "isCorrect": false,
        "explanation": "通信を暗号化する方式は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "ウォータフォール開発の説明として正しいものは？",
    "choices": [
      {
        "text": "工程を順番に進める開発手法",
        "isCorrect": true,
        "explanation": "ウォータフォールは要件定義から保守まで順に進めます。"
      },
      {
        "text": "常に同時並行で進めるだけの手法",
        "isCorrect": false,
        "explanation": "常に同時並行で進めるだけの手法は正解ではありません。"
      },
      {
        "text": "暗号化方式",
        "isCorrect": false,
        "explanation": "暗号化方式は正解ではありません。"
      },
      {
        "text": "無線通信規格",
        "isCorrect": false,
        "explanation": "無線通信規格は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "要件定義の説明として正しいものは？",
    "choices": [
      {
        "text": "システムに求める機能や条件を明確にする工程",
        "isCorrect": true,
        "explanation": "要件定義では利用者の要求を整理します。"
      },
      {
        "text": "完成品を廃棄する工程",
        "isCorrect": false,
        "explanation": "完成品を廃棄する工程は正解ではありません。"
      },
      {
        "text": "通信速度を測る工程",
        "isCorrect": false,
        "explanation": "通信速度を測る工程は正解ではありません。"
      },
      {
        "text": "社員の給与を支払う工程",
        "isCorrect": false,
        "explanation": "社員の給与を支払う工程は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "テストの説明として正しいものは？",
    "choices": [
      {
        "text": "システムが期待どおり動くか確認する工程",
        "isCorrect": true,
        "explanation": "テストは品質確認に欠かせません。"
      },
      {
        "text": "電源ケーブルを販売する工程",
        "isCorrect": false,
        "explanation": "電源ケーブルを販売する工程は正解ではありません。"
      },
      {
        "text": "会社名を変更する工程",
        "isCorrect": false,
        "explanation": "会社名を変更する工程は正解ではありません。"
      },
      {
        "text": "紙を印刷するだけの工程",
        "isCorrect": false,
        "explanation": "紙を印刷するだけの工程は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "単体テストの説明として正しいものは？",
    "choices": [
      {
        "text": "プログラムの部品ごとに確認するテスト",
        "isCorrect": true,
        "explanation": "単体テストは個々の機能を確認します。"
      },
      {
        "text": "全社の売上を決める会議",
        "isCorrect": false,
        "explanation": "全社の売上を決める会議は正解ではありません。"
      },
      {
        "text": "通信機器を梱包する作業",
        "isCorrect": false,
        "explanation": "通信機器を梱包する作業は正解ではありません。"
      },
      {
        "text": "法律文書の保管",
        "isCorrect": false,
        "explanation": "法律文書の保管は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "結合テストの説明として正しいものは？",
    "choices": [
      {
        "text": "複数の部品を組み合わせて確認するテスト",
        "isCorrect": true,
        "explanation": "結合テストは連携部分を確認します。"
      },
      {
        "text": "画面色だけを選ぶ作業",
        "isCorrect": false,
        "explanation": "画面色だけを選ぶ作業は正解ではありません。"
      },
      {
        "text": "文具を購入する作業",
        "isCorrect": false,
        "explanation": "文具を購入する作業は正解ではありません。"
      },
      {
        "text": "紙を裁断する作業",
        "isCorrect": false,
        "explanation": "紙を裁断する作業は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "受入テストの説明として正しいものは？",
    "choices": [
      {
        "text": "利用者の要求を満たすか確認するテスト",
        "isCorrect": true,
        "explanation": "受入テストは利用者視点で確認します。"
      },
      {
        "text": "CPUを製造する作業",
        "isCorrect": false,
        "explanation": "CPUを製造する作業は正解ではありません。"
      },
      {
        "text": "紙を郵送する作業",
        "isCorrect": false,
        "explanation": "紙を郵送する作業は正解ではありません。"
      },
      {
        "text": "ファイル名を変更するだけの作業",
        "isCorrect": false,
        "explanation": "ファイル名を変更するだけの作業は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "プロジェクトの説明として正しいものは？",
    "choices": [
      {
        "text": "目的達成のために期限付きで行う活動",
        "isCorrect": true,
        "explanation": "プロジェクトには目的、期限、成果物があります。"
      },
      {
        "text": "日常的に終わりなく続く単純作業",
        "isCorrect": false,
        "explanation": "日常的に終わりなく続く単純作業は正解ではありません。"
      },
      {
        "text": "単なる記憶装置",
        "isCorrect": false,
        "explanation": "単なる記憶装置は正解ではありません。"
      },
      {
        "text": "通信速度の単位",
        "isCorrect": false,
        "explanation": "通信速度の単位は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "WBSの説明として正しいものは？",
    "choices": [
      {
        "text": "作業を細かく分解した構成図",
        "isCorrect": true,
        "explanation": "WBSは作業範囲を階層的に整理します。"
      },
      {
        "text": "通信の暗号化方式",
        "isCorrect": false,
        "explanation": "通信の暗号化方式は正解ではありません。"
      },
      {
        "text": "データベースの索引",
        "isCorrect": false,
        "explanation": "データベースの索引は正解ではありません。"
      },
      {
        "text": "画像のファイル形式",
        "isCorrect": false,
        "explanation": "画像のファイル形式は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "ガントチャートの説明として正しいものは？",
    "choices": [
      {
        "text": "作業期間や進捗を横棒で示す図",
        "isCorrect": true,
        "explanation": "ガントチャートはスケジュール管理に使います。"
      },
      {
        "text": "データベースの表",
        "isCorrect": false,
        "explanation": "データベースの表は正解ではありません。"
      },
      {
        "text": "暗号鍵の一覧",
        "isCorrect": false,
        "explanation": "暗号鍵の一覧は正解ではありません。"
      },
      {
        "text": "画像の圧縮形式",
        "isCorrect": false,
        "explanation": "画像の圧縮形式は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "クリティカルパスの説明として正しいものは？",
    "choices": [
      {
        "text": "遅れると全体納期に影響する最長経路",
        "isCorrect": true,
        "explanation": "クリティカルパスは納期管理で重要です。"
      },
      {
        "text": "最も安い通信回線",
        "isCorrect": false,
        "explanation": "最も安い通信回線は正解ではありません。"
      },
      {
        "text": "一番小さいファイル",
        "isCorrect": false,
        "explanation": "一番小さいファイルは正解ではありません。"
      },
      {
        "text": "印刷の余白",
        "isCorrect": false,
        "explanation": "印刷の余白は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "リスク管理の説明として正しいものは？",
    "choices": [
      {
        "text": "問題が起きる可能性と影響に備える活動",
        "isCorrect": true,
        "explanation": "リスク管理では予防策や対応策を考えます。"
      },
      {
        "text": "画面の色を決めるだけの活動",
        "isCorrect": false,
        "explanation": "画面の色を決めるだけの活動は正解ではありません。"
      },
      {
        "text": "通信を必ず止める活動",
        "isCorrect": false,
        "explanation": "通信を必ず止める活動は正解ではありません。"
      },
      {
        "text": "売上を隠す活動",
        "isCorrect": false,
        "explanation": "売上を隠す活動は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "インシデントの説明として正しいものは？",
    "choices": [
      {
        "text": "情報セキュリティ上の事故やその恐れがある事象",
        "isCorrect": true,
        "explanation": "インシデントには情報漏えいや不正アクセスなどがあります。"
      },
      {
        "text": "正常な定期バックアップだけ",
        "isCorrect": false,
        "explanation": "正常な定期バックアップだけは正解ではありません。"
      },
      {
        "text": "通常の昼休み",
        "isCorrect": false,
        "explanation": "通常の昼休みは正解ではありません。"
      },
      {
        "text": "紙のサイズ",
        "isCorrect": false,
        "explanation": "紙のサイズは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "BCPの説明として正しいものは？",
    "choices": [
      {
        "text": "事業継続計画",
        "isCorrect": true,
        "explanation": "BCPは災害などでも重要業務を継続するための計画です。"
      },
      {
        "text": "社員証の番号",
        "isCorrect": false,
        "explanation": "社員証の番号は正解ではありません。"
      },
      {
        "text": "画像編集ソフト",
        "isCorrect": false,
        "explanation": "画像編集ソフトは正解ではありません。"
      },
      {
        "text": "通信速度の単位",
        "isCorrect": false,
        "explanation": "通信速度の単位は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "RPOの説明として正しいものは？",
    "choices": [
      {
        "text": "どの時点までのデータ復旧を目標にするかを示す指標",
        "isCorrect": true,
        "explanation": "RPOは目標復旧時点です。"
      },
      {
        "text": "復旧にかけられる時間の目標",
        "isCorrect": false,
        "explanation": "復旧にかけられる時間の目標は正解ではありません。"
      },
      {
        "text": "画面解像度",
        "isCorrect": false,
        "explanation": "画面解像度は正解ではありません。"
      },
      {
        "text": "通信ケーブルの太さ",
        "isCorrect": false,
        "explanation": "通信ケーブルの太さは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "RTOの説明として正しいものは？",
    "choices": [
      {
        "text": "復旧までに許容される時間の目標",
        "isCorrect": true,
        "explanation": "RTOは目標復旧時間です。"
      },
      {
        "text": "復旧するデータ時点の目標",
        "isCorrect": false,
        "explanation": "復旧するデータ時点の目標は正解ではありません。"
      },
      {
        "text": "紙の厚さ",
        "isCorrect": false,
        "explanation": "紙の厚さは正解ではありません。"
      },
      {
        "text": "CPUの型番",
        "isCorrect": false,
        "explanation": "CPUの型番は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "可用性の説明として正しいものは？",
    "choices": [
      {
        "text": "必要なときに利用できる性質",
        "isCorrect": true,
        "explanation": "可用性は情報セキュリティの三要素の一つです。"
      },
      {
        "text": "情報を秘密にする性質だけ",
        "isCorrect": false,
        "explanation": "情報を秘密にする性質だけは正解ではありません。"
      },
      {
        "text": "情報が正確である性質だけ",
        "isCorrect": false,
        "explanation": "情報が正確である性質だけは正解ではありません。"
      },
      {
        "text": "文字を大きくする性質",
        "isCorrect": false,
        "explanation": "文字を大きくする性質は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "機密性の説明として正しいものは？",
    "choices": [
      {
        "text": "許可された人だけが情報を見られる性質",
        "isCorrect": true,
        "explanation": "機密性は情報の秘密を守る性質です。"
      },
      {
        "text": "いつでも利用できる性質だけ",
        "isCorrect": false,
        "explanation": "いつでも利用できる性質だけは正解ではありません。"
      },
      {
        "text": "通信速度が速い性質",
        "isCorrect": false,
        "explanation": "通信速度が速い性質は正解ではありません。"
      },
      {
        "text": "紙が厚い性質",
        "isCorrect": false,
        "explanation": "紙が厚い性質は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "完全性の説明として正しいものは？",
    "choices": [
      {
        "text": "情報が正確で改ざんされていない性質",
        "isCorrect": true,
        "explanation": "完全性は情報の正確さを守る性質です。"
      },
      {
        "text": "情報を大きく印刷する性質",
        "isCorrect": false,
        "explanation": "情報を大きく印刷する性質は正解ではありません。"
      },
      {
        "text": "通信速度が速い性質",
        "isCorrect": false,
        "explanation": "通信速度が速い性質は正解ではありません。"
      },
      {
        "text": "機器が軽い性質",
        "isCorrect": false,
        "explanation": "機器が軽い性質は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "PDCAの説明として正しいものは？",
    "choices": [
      {
        "text": "Plan、Do、Check、Actの改善サイクル",
        "isCorrect": true,
        "explanation": "PDCAは継続的改善の考え方です。"
      },
      {
        "text": "Password、Data、CPU、APIの略",
        "isCorrect": false,
        "explanation": "Password、Data、CPU、APIの略は正解ではありません。"
      },
      {
        "text": "紙文書を配送する手順",
        "isCorrect": false,
        "explanation": "紙文書を配送する手順は正解ではありません。"
      },
      {
        "text": "暗号鍵の生成方式",
        "isCorrect": false,
        "explanation": "暗号鍵の生成方式は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "KPIの説明として正しいものは？",
    "choices": [
      {
        "text": "目標達成度を測る重要業績評価指標",
        "isCorrect": true,
        "explanation": "KPIは業務目標の進捗を測る指標です。"
      },
      {
        "text": "暗号鍵の種類",
        "isCorrect": false,
        "explanation": "暗号鍵の種類は正解ではありません。"
      },
      {
        "text": "プリンタの解像度",
        "isCorrect": false,
        "explanation": "プリンタの解像度は正解ではありません。"
      },
      {
        "text": "通信ケーブル",
        "isCorrect": false,
        "explanation": "通信ケーブルは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "KGIの説明として正しいものは？",
    "choices": [
      {
        "text": "最終的な目標達成を示す指標",
        "isCorrect": true,
        "explanation": "KGIは最終目標を示す指標です。"
      },
      {
        "text": "一時的な作業メモ",
        "isCorrect": false,
        "explanation": "一時的な作業メモは正解ではありません。"
      },
      {
        "text": "画面の色設定",
        "isCorrect": false,
        "explanation": "画面の色設定は正解ではありません。"
      },
      {
        "text": "無線LANの暗号方式",
        "isCorrect": false,
        "explanation": "無線LANの暗号方式は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "BPRの説明として正しいものは？",
    "choices": [
      {
        "text": "業務プロセスを抜本的に見直すこと",
        "isCorrect": true,
        "explanation": "BPRは業務改革の考え方です。"
      },
      {
        "text": "ファイルを圧縮すること",
        "isCorrect": false,
        "explanation": "ファイルを圧縮することは正解ではありません。"
      },
      {
        "text": "紙を増やすこと",
        "isCorrect": false,
        "explanation": "紙を増やすことは正解ではありません。"
      },
      {
        "text": "画面を暗くすること",
        "isCorrect": false,
        "explanation": "画面を暗くすることは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "ERPの説明として正しいものは？",
    "choices": [
      {
        "text": "企業の基幹業務を統合的に管理する仕組み",
        "isCorrect": true,
        "explanation": "ERPは販売、会計、人事などを統合管理します。"
      },
      {
        "text": "個人の画像編集ソフト",
        "isCorrect": false,
        "explanation": "個人の画像編集ソフトは正解ではありません。"
      },
      {
        "text": "通信速度の単位",
        "isCorrect": false,
        "explanation": "通信速度の単位は正解ではありません。"
      },
      {
        "text": "暗号化だけを行う装置",
        "isCorrect": false,
        "explanation": "暗号化だけを行う装置は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "CRMの説明として正しいものは？",
    "choices": [
      {
        "text": "顧客との関係を管理する考え方やシステム",
        "isCorrect": true,
        "explanation": "CRMは顧客情報や対応履歴の活用に使われます。"
      },
      {
        "text": "CPUの冷却方式",
        "isCorrect": false,
        "explanation": "CPUの冷却方式は正解ではありません。"
      },
      {
        "text": "在庫棚の材質",
        "isCorrect": false,
        "explanation": "在庫棚の材質は正解ではありません。"
      },
      {
        "text": "通信ケーブルの長さ",
        "isCorrect": false,
        "explanation": "通信ケーブルの長さは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "SCMの説明として正しいものは？",
    "choices": [
      {
        "text": "調達から販売までの供給連鎖を管理する考え方",
        "isCorrect": true,
        "explanation": "SCMはサプライチェーン全体を最適化します。"
      },
      {
        "text": "画面の色を決める方式",
        "isCorrect": false,
        "explanation": "画面の色を決める方式は正解ではありません。"
      },
      {
        "text": "個人認証の一種",
        "isCorrect": false,
        "explanation": "個人認証の一種は正解ではありません。"
      },
      {
        "text": "画像の保存形式",
        "isCorrect": false,
        "explanation": "画像の保存形式は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "IoTの説明として正しいものは？",
    "choices": [
      {
        "text": "モノがインターネットにつながる仕組み",
        "isCorrect": true,
        "explanation": "IoTではセンサーや機器がネットワークに接続されます。"
      },
      {
        "text": "紙だけで行う会計処理",
        "isCorrect": false,
        "explanation": "紙だけで行う会計処理は正解ではありません。"
      },
      {
        "text": "電源を使わない記憶装置",
        "isCorrect": false,
        "explanation": "電源を使わない記憶装置は正解ではありません。"
      },
      {
        "text": "単なる表計算の罫線",
        "isCorrect": false,
        "explanation": "単なる表計算の罫線は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "AIの説明として正しいものは？",
    "choices": [
      {
        "text": "人間の知的活動をコンピュータで実現する技術",
        "isCorrect": true,
        "explanation": "AIは認識、予測、判断などに使われます。"
      },
      {
        "text": "紙文書だけを保管する制度",
        "isCorrect": false,
        "explanation": "紙文書だけを保管する制度は正解ではありません。"
      },
      {
        "text": "通信ケーブルの種類",
        "isCorrect": false,
        "explanation": "通信ケーブルの種類は正解ではありません。"
      },
      {
        "text": "会計伝票の番号",
        "isCorrect": false,
        "explanation": "会計伝票の番号は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "機械学習の説明として正しいものは？",
    "choices": [
      {
        "text": "データから規則性を学習するAI技術",
        "isCorrect": true,
        "explanation": "機械学習はデータに基づいてモデルを作ります。"
      },
      {
        "text": "常に人が手計算する方法",
        "isCorrect": false,
        "explanation": "常に人が手計算する方法は正解ではありません。"
      },
      {
        "text": "紙を印刷する方式",
        "isCorrect": false,
        "explanation": "紙を印刷する方式は正解ではありません。"
      },
      {
        "text": "通信を遮断する装置",
        "isCorrect": false,
        "explanation": "通信を遮断する装置は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "ビッグデータの説明として正しいものは？",
    "choices": [
      {
        "text": "大量で多様なデータ",
        "isCorrect": true,
        "explanation": "ビッグデータは分析や予測に活用されます。"
      },
      {
        "text": "少量の紙文書だけ",
        "isCorrect": false,
        "explanation": "少量の紙文書だけは正解ではありません。"
      },
      {
        "text": "CPUの部品名",
        "isCorrect": false,
        "explanation": "CPUの部品名は正解ではありません。"
      },
      {
        "text": "印刷用の余白",
        "isCorrect": false,
        "explanation": "印刷用の余白は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "データマイニングの説明として正しいものは？",
    "choices": [
      {
        "text": "大量データから有用な知識を見つけること",
        "isCorrect": true,
        "explanation": "データマイニングは傾向や関係の発見に使います。"
      },
      {
        "text": "紙を採掘する作業",
        "isCorrect": false,
        "explanation": "紙を採掘する作業は正解ではありません。"
      },
      {
        "text": "通信ケーブルを敷設する作業",
        "isCorrect": false,
        "explanation": "通信ケーブルを敷設する作業は正解ではありません。"
      },
      {
        "text": "画面を暗くする作業",
        "isCorrect": false,
        "explanation": "画面を暗くする作業は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "RPAの説明として正しいものは？",
    "choices": [
      {
        "text": "定型的なPC作業をソフトウェアロボットで自動化すること",
        "isCorrect": true,
        "explanation": "RPAは繰り返し作業の自動化に向いています。"
      },
      {
        "text": "紙の厚さを測ること",
        "isCorrect": false,
        "explanation": "紙の厚さを測ることは正解ではありません。"
      },
      {
        "text": "通信回線を増やすこと",
        "isCorrect": false,
        "explanation": "通信回線を増やすことは正解ではありません。"
      },
      {
        "text": "画像を必ず削除すること",
        "isCorrect": false,
        "explanation": "画像を必ず削除することは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "電子署名の説明として正しいものは？",
    "choices": [
      {
        "text": "電子文書の作成者や改ざん有無を確認する仕組み",
        "isCorrect": true,
        "explanation": "電子署名は電子文書の信頼性確認に使います。"
      },
      {
        "text": "紙に鉛筆で書く署名だけ",
        "isCorrect": false,
        "explanation": "紙に鉛筆で書く署名だけは正解ではありません。"
      },
      {
        "text": "画面を拡大する機能",
        "isCorrect": false,
        "explanation": "画面を拡大する機能は正解ではありません。"
      },
      {
        "text": "通信速度の単位",
        "isCorrect": false,
        "explanation": "通信速度の単位は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "個人情報の説明として正しいものは？",
    "choices": [
      {
        "text": "特定の個人を識別できる情報",
        "isCorrect": true,
        "explanation": "氏名や住所など個人を識別できる情報が該当します。"
      },
      {
        "text": "会社の所在地だけで個人を識別できない情報",
        "isCorrect": false,
        "explanation": "会社の所在地だけで個人を識別できない情報は正解ではありません。"
      },
      {
        "text": "CPUの型番だけ",
        "isCorrect": false,
        "explanation": "CPUの型番だけは正解ではありません。"
      },
      {
        "text": "一般的な天気情報",
        "isCorrect": false,
        "explanation": "一般的な天気情報は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "知的財産権の説明として正しいものは？",
    "choices": [
      {
        "text": "発明や著作物などを保護する権利",
        "isCorrect": true,
        "explanation": "著作権や特許権などが知的財産権に含まれます。"
      },
      {
        "text": "通信速度を保証する権利",
        "isCorrect": false,
        "explanation": "通信速度を保証する権利は正解ではありません。"
      },
      {
        "text": "紙の色を決める権利",
        "isCorrect": false,
        "explanation": "紙の色を決める権利は正解ではありません。"
      },
      {
        "text": "電源容量の単位",
        "isCorrect": false,
        "explanation": "電源容量の単位は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "著作権の説明として正しいものは？",
    "choices": [
      {
        "text": "著作物を創作した人に発生する権利",
        "isCorrect": true,
        "explanation": "著作権は創作時に原則として発生します。"
      },
      {
        "text": "通信回線の利用料",
        "isCorrect": false,
        "explanation": "通信回線の利用料は正解ではありません。"
      },
      {
        "text": "会計上の負債",
        "isCorrect": false,
        "explanation": "会計上の負債は正解ではありません。"
      },
      {
        "text": "CPUの速度",
        "isCorrect": false,
        "explanation": "CPUの速度は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "特許権の説明として正しいものは？",
    "choices": [
      {
        "text": "発明を保護する権利",
        "isCorrect": true,
        "explanation": "特許権は技術的な発明を保護します。"
      },
      {
        "text": "文章表現を保護する権利だけ",
        "isCorrect": false,
        "explanation": "文章表現を保護する権利だけは正解ではありません。"
      },
      {
        "text": "通信速度の単位",
        "isCorrect": false,
        "explanation": "通信速度の単位は正解ではありません。"
      },
      {
        "text": "紙のサイズ",
        "isCorrect": false,
        "explanation": "紙のサイズは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "商標権の説明として正しいものは？",
    "choices": [
      {
        "text": "商品やサービスの識別標識を保護する権利",
        "isCorrect": true,
        "explanation": "商標権はブランド名やロゴなどを保護します。"
      },
      {
        "text": "発明そのものだけを保護する権利",
        "isCorrect": false,
        "explanation": "発明そのものだけを保護する権利は正解ではありません。"
      },
      {
        "text": "個人の住所を守る制度",
        "isCorrect": false,
        "explanation": "個人の住所を守る制度は正解ではありません。"
      },
      {
        "text": "通信方式の名称",
        "isCorrect": false,
        "explanation": "通信方式の名称は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "損益分岐点の説明として正しいものは？",
    "choices": [
      {
        "text": "売上と費用が等しく利益がゼロになる点",
        "isCorrect": true,
        "explanation": "損益分岐点を超えると利益が出ます。"
      },
      {
        "text": "通信が暗号化される点",
        "isCorrect": false,
        "explanation": "通信が暗号化される点は正解ではありません。"
      },
      {
        "text": "画像が最も明るい点",
        "isCorrect": false,
        "explanation": "画像が最も明るい点は正解ではありません。"
      },
      {
        "text": "電源が切れる点",
        "isCorrect": false,
        "explanation": "電源が切れる点は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "固定費の説明として正しいものは？",
    "choices": [
      {
        "text": "売上量に関係なく一定程度発生する費用",
        "isCorrect": true,
        "explanation": "家賃などは固定費の例です。"
      },
      {
        "text": "売上に比例して増える費用",
        "isCorrect": false,
        "explanation": "売上に比例して増える費用は正解ではありません。"
      },
      {
        "text": "税金だけを指す費用",
        "isCorrect": false,
        "explanation": "税金だけを指す費用は正解ではありません。"
      },
      {
        "text": "通信データ量そのもの",
        "isCorrect": false,
        "explanation": "通信データ量そのものは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "変動費の説明として正しいものは？",
    "choices": [
      {
        "text": "売上量や生産量に応じて増減する費用",
        "isCorrect": true,
        "explanation": "材料費などは変動費の例です。"
      },
      {
        "text": "常に一定の家賃",
        "isCorrect": false,
        "explanation": "常に一定の家賃は正解ではありません。"
      },
      {
        "text": "暗号鍵の長さ",
        "isCorrect": false,
        "explanation": "暗号鍵の長さは正解ではありません。"
      },
      {
        "text": "画像の明るさ",
        "isCorrect": false,
        "explanation": "画像の明るさは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "減価償却の説明として正しいものは？",
    "choices": [
      {
        "text": "固定資産の取得費を使用期間に分けて費用化すること",
        "isCorrect": true,
        "explanation": "減価償却は固定資産の費用配分です。"
      },
      {
        "text": "売上をすぐ全額利益にすること",
        "isCorrect": false,
        "explanation": "売上をすぐ全額利益にすることは正解ではありません。"
      },
      {
        "text": "通信を暗号化すること",
        "isCorrect": false,
        "explanation": "通信を暗号化することは正解ではありません。"
      },
      {
        "text": "紙を裁断すること",
        "isCorrect": false,
        "explanation": "紙を裁断することは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "貸借対照表の説明として正しいものは？",
    "choices": [
      {
        "text": "一定時点の資産、負債、純資産を示す表",
        "isCorrect": true,
        "explanation": "貸借対照表は財政状態を表します。"
      },
      {
        "text": "一定期間の収益と費用を示す表",
        "isCorrect": false,
        "explanation": "一定期間の収益と費用を示す表は正解ではありません。"
      },
      {
        "text": "作業予定を示す表",
        "isCorrect": false,
        "explanation": "作業予定を示す表は正解ではありません。"
      },
      {
        "text": "通信経路図",
        "isCorrect": false,
        "explanation": "通信経路図は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "損益計算書の説明として正しいものは？",
    "choices": [
      {
        "text": "一定期間の収益と費用、利益を示す表",
        "isCorrect": true,
        "explanation": "損益計算書は経営成績を表します。"
      },
      {
        "text": "一定時点の資産だけを示す表",
        "isCorrect": false,
        "explanation": "一定時点の資産だけを示す表は正解ではありません。"
      },
      {
        "text": "ネットワーク機器の一覧",
        "isCorrect": false,
        "explanation": "ネットワーク機器の一覧は正解ではありません。"
      },
      {
        "text": "プログラムの流れ図",
        "isCorrect": false,
        "explanation": "プログラムの流れ図は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "ROEの説明として正しいものは？",
    "choices": [
      {
        "text": "自己資本に対する利益率",
        "isCorrect": true,
        "explanation": "ROEは自己資本利益率です。"
      },
      {
        "text": "売上高に対する通信量",
        "isCorrect": false,
        "explanation": "売上高に対する通信量は正解ではありません。"
      },
      {
        "text": "CPU使用率",
        "isCorrect": false,
        "explanation": "CPU使用率は正解ではありません。"
      },
      {
        "text": "印刷速度",
        "isCorrect": false,
        "explanation": "印刷速度は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "ROIの説明として正しいものは？",
    "choices": [
      {
        "text": "投資に対する利益の割合",
        "isCorrect": true,
        "explanation": "ROIは投資効果を見る指標です。"
      },
      {
        "text": "通信ケーブルの長さ",
        "isCorrect": false,
        "explanation": "通信ケーブルの長さは正解ではありません。"
      },
      {
        "text": "画像の解像度",
        "isCorrect": false,
        "explanation": "画像の解像度は正解ではありません。"
      },
      {
        "text": "社員番号",
        "isCorrect": false,
        "explanation": "社員番号は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "コンプライアンスの説明として正しいものは？",
    "choices": [
      {
        "text": "法令や社会規範を守ること",
        "isCorrect": true,
        "explanation": "コンプライアンスは企業活動の基本です。"
      },
      {
        "text": "通信速度を上げること",
        "isCorrect": false,
        "explanation": "通信速度を上げることは正解ではありません。"
      },
      {
        "text": "画像を圧縮すること",
        "isCorrect": false,
        "explanation": "画像を圧縮することは正解ではありません。"
      },
      {
        "text": "PCを再起動すること",
        "isCorrect": false,
        "explanation": "PCを再起動することは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "コーポレートガバナンスの説明として正しいものは？",
    "choices": [
      {
        "text": "企業を適切に管理・監督する仕組み",
        "isCorrect": true,
        "explanation": "コーポレートガバナンスは経営の健全性を高めます。"
      },
      {
        "text": "通信を高速化する技術",
        "isCorrect": false,
        "explanation": "通信を高速化する技術は正解ではありません。"
      },
      {
        "text": "画像の編集方法",
        "isCorrect": false,
        "explanation": "画像の編集方法は正解ではありません。"
      },
      {
        "text": "紙の保管場所",
        "isCorrect": false,
        "explanation": "紙の保管場所は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "CSRの説明として正しいものは？",
    "choices": [
      {
        "text": "企業の社会的責任",
        "isCorrect": true,
        "explanation": "CSRは社会や環境への責任ある活動を指します。"
      },
      {
        "text": "CPUの冷却機能",
        "isCorrect": false,
        "explanation": "CPUの冷却機能は正解ではありません。"
      },
      {
        "text": "通信速度の単位",
        "isCorrect": false,
        "explanation": "通信速度の単位は正解ではありません。"
      },
      {
        "text": "会議室の予約番号",
        "isCorrect": false,
        "explanation": "会議室の予約番号は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "ステークホルダの説明として正しいものは？",
    "choices": [
      {
        "text": "企業活動に関係する利害関係者",
        "isCorrect": true,
        "explanation": "顧客、従業員、株主、取引先などが含まれます。"
      },
      {
        "text": "通信ケーブルだけ",
        "isCorrect": false,
        "explanation": "通信ケーブルだけは正解ではありません。"
      },
      {
        "text": "画像ファイルだけ",
        "isCorrect": false,
        "explanation": "画像ファイルだけは正解ではありません。"
      },
      {
        "text": "紙のサイズだけ",
        "isCorrect": false,
        "explanation": "紙のサイズだけは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "SWOT分析の説明として正しいものは？",
    "choices": [
      {
        "text": "強み、弱み、機会、脅威を整理する分析",
        "isCorrect": true,
        "explanation": "SWOT分析は経営環境の整理に使います。"
      },
      {
        "text": "通信内容を暗号化する分析",
        "isCorrect": false,
        "explanation": "通信内容を暗号化する分析は正解ではありません。"
      },
      {
        "text": "画像の色を変える分析",
        "isCorrect": false,
        "explanation": "画像の色を変える分析は正解ではありません。"
      },
      {
        "text": "紙を分類するだけの分析",
        "isCorrect": false,
        "explanation": "紙を分類するだけの分析は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "3C分析の説明として正しいものは？",
    "choices": [
      {
        "text": "顧客、自社、競合を分析する手法",
        "isCorrect": true,
        "explanation": "3C分析はマーケティング戦略の検討に使います。"
      },
      {
        "text": "CPU、Cloud、Cableの分析",
        "isCorrect": false,
        "explanation": "CPU、Cloud、Cableの分析は正解ではありません。"
      },
      {
        "text": "紙、鉛筆、机の分析",
        "isCorrect": false,
        "explanation": "紙、鉛筆、机の分析は正解ではありません。"
      },
      {
        "text": "暗号、署名、鍵の分析",
        "isCorrect": false,
        "explanation": "暗号、署名、鍵の分析は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "4Pの説明として正しいものは？",
    "choices": [
      {
        "text": "Product、Price、Place、Promotionのマーケティング要素",
        "isCorrect": true,
        "explanation": "4Pはマーケティングミックスの代表例です。"
      },
      {
        "text": "Plan、Program、Port、Print",
        "isCorrect": false,
        "explanation": "Plan、Program、Port、Printは正解ではありません。"
      },
      {
        "text": "CPU、RAM、ROM、SSD",
        "isCorrect": false,
        "explanation": "CPU、RAM、ROM、SSDは正解ではありません。"
      },
      {
        "text": "入力、処理、出力、保存",
        "isCorrect": false,
        "explanation": "入力、処理、出力、保存は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "サブスクリプションの説明として正しいものは？",
    "choices": [
      {
        "text": "一定期間ごとに料金を支払って利用する方式",
        "isCorrect": true,
        "explanation": "サブスクリプションは継続課金型の利用形態です。"
      },
      {
        "text": "一度だけ無料で永久利用する方式",
        "isCorrect": false,
        "explanation": "一度だけ無料で永久利用する方式は正解ではありません。"
      },
      {
        "text": "紙だけで契約する方式",
        "isCorrect": false,
        "explanation": "紙だけで契約する方式は正解ではありません。"
      },
      {
        "text": "通信を遮断する方式",
        "isCorrect": false,
        "explanation": "通信を遮断する方式は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "ロングテールの説明として正しいものは？",
    "choices": [
      {
        "text": "少量販売の商品群の合計が大きな売上になる考え方",
        "isCorrect": true,
        "explanation": "ロングテールはネット販売などで見られる考え方です。"
      },
      {
        "text": "商品を必ず短期間で廃棄する考え方",
        "isCorrect": false,
        "explanation": "商品を必ず短期間で廃棄する考え方は正解ではありません。"
      },
      {
        "text": "通信経路を短くする考え方",
        "isCorrect": false,
        "explanation": "通信経路を短くする考え方は正解ではありません。"
      },
      {
        "text": "画面を縦長にする考え方",
        "isCorrect": false,
        "explanation": "画面を縦長にする考え方は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "オムニチャネルの説明として正しいものは？",
    "choices": [
      {
        "text": "複数の販売・接点を連携させる考え方",
        "isCorrect": true,
        "explanation": "オムニチャネルは店舗、EC、アプリなどを連携します。"
      },
      {
        "text": "一つの店舗だけを必ず使う考え方",
        "isCorrect": false,
        "explanation": "一つの店舗だけを必ず使う考え方は正解ではありません。"
      },
      {
        "text": "通信を暗号化する方式",
        "isCorrect": false,
        "explanation": "通信を暗号化する方式は正解ではありません。"
      },
      {
        "text": "会計書類の名称",
        "isCorrect": false,
        "explanation": "会計書類の名称は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "アクセシビリティの説明として正しいものは？",
    "choices": [
      {
        "text": "誰もが情報やサービスを利用しやすい性質",
        "isCorrect": true,
        "explanation": "アクセシビリティは利用しやすさの観点です。"
      },
      {
        "text": "特定の人だけが使える性質",
        "isCorrect": false,
        "explanation": "特定の人だけが使える性質は正解ではありません。"
      },
      {
        "text": "通信速度だけを表す性質",
        "isCorrect": false,
        "explanation": "通信速度だけを表す性質は正解ではありません。"
      },
      {
        "text": "紙の厚さ",
        "isCorrect": false,
        "explanation": "紙の厚さは正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "ユーザビリティの説明として正しいものは？",
    "choices": [
      {
        "text": "利用者にとっての使いやすさ",
        "isCorrect": true,
        "explanation": "ユーザビリティは操作のしやすさを指します。"
      },
      {
        "text": "暗号鍵の長さ",
        "isCorrect": false,
        "explanation": "暗号鍵の長さは正解ではありません。"
      },
      {
        "text": "紙の色",
        "isCorrect": false,
        "explanation": "紙の色は正解ではありません。"
      },
      {
        "text": "通信ケーブルの材質",
        "isCorrect": false,
        "explanation": "通信ケーブルの材質は正解ではありません。"
      }
    ]
  },
  {
    "type": "単語",
    "question": "ユニバーサルデザインの説明として正しいものは？",
    "choices": [
      {
        "text": "できるだけ多くの人が使いやすい設計",
        "isCorrect": true,
        "explanation": "ユニバーサルデザインは幅広い利用者を考慮します。"
      },
      {
        "text": "専門家だけが使える設計",
        "isCorrect": false,
        "explanation": "専門家だけが使える設計は正解ではありません。"
      },
      {
        "text": "紙文書だけの設計",
        "isCorrect": false,
        "explanation": "紙文書だけの設計は正解ではありません。"
      },
      {
        "text": "通信を止める設計",
        "isCorrect": false,
        "explanation": "通信を止める設計は正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "パスワード管理として最も適切なものは？",
    "choices": [
      {
        "text": "十分な長さで推測されにくい文字列を使い、使い回しを避ける",
        "isCorrect": true,
        "explanation": "長く推測されにくいパスワードと使い回し防止が重要です。"
      },
      {
        "text": "短く覚えやすい単語だけにする",
        "isCorrect": false,
        "explanation": "短く覚えやすい単語だけにするは正解ではありません。"
      },
      {
        "text": "全サービスで同じパスワードを使う",
        "isCorrect": false,
        "explanation": "全サービスで同じパスワードを使うは正解ではありません。"
      },
      {
        "text": "パスワードを付箋に書いて画面に貼る",
        "isCorrect": false,
        "explanation": "パスワードを付箋に書いて画面に貼るは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "退職者のアカウント管理として最も適切なものは？",
    "choices": [
      {
        "text": "退職時に利用権限を停止または削除する",
        "isCorrect": true,
        "explanation": "退職者の権限は速やかに停止する必要があります。"
      },
      {
        "text": "退職後も共有IDとして使う",
        "isCorrect": false,
        "explanation": "退職後も共有IDとして使うは正解ではありません。"
      },
      {
        "text": "本人に任せて放置する",
        "isCorrect": false,
        "explanation": "本人に任せて放置するは正解ではありません。"
      },
      {
        "text": "権限を管理者権限に変更する",
        "isCorrect": false,
        "explanation": "権限を管理者権限に変更するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "USBメモリの利用ルールとして最も適切なものは？",
    "choices": [
      {
        "text": "利用を許可制にし、暗号化や管理台帳で管理する",
        "isCorrect": true,
        "explanation": "外部媒体は紛失や情報漏えいのリスクがあります。"
      },
      {
        "text": "誰でも自由に持ち出せるようにする",
        "isCorrect": false,
        "explanation": "誰でも自由に持ち出せるようにするは正解ではありません。"
      },
      {
        "text": "紛失しても報告しない",
        "isCorrect": false,
        "explanation": "紛失しても報告しないは正解ではありません。"
      },
      {
        "text": "業務データを私物USBに保存する",
        "isCorrect": false,
        "explanation": "業務データを私物USBに保存するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "メール誤送信の対策として最も適切なものは？",
    "choices": [
      {
        "text": "送信前に宛先と添付ファイルを確認する",
        "isCorrect": true,
        "explanation": "送信前確認は誤送信防止の基本です。"
      },
      {
        "text": "宛先を確認せず一斉送信する",
        "isCorrect": false,
        "explanation": "宛先を確認せず一斉送信するは正解ではありません。"
      },
      {
        "text": "機密情報を常に本文に直接書く",
        "isCorrect": false,
        "explanation": "機密情報を常に本文に直接書くは正解ではありません。"
      },
      {
        "text": "誤送信しても報告しない",
        "isCorrect": false,
        "explanation": "誤送信しても報告しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "クラウドサービス導入時の確認として最も適切なものは？",
    "choices": [
      {
        "text": "セキュリティ、可用性、契約条件を確認する",
        "isCorrect": true,
        "explanation": "クラウド利用ではサービス条件やセキュリティ確認が必要です。"
      },
      {
        "text": "無料なら規約を読まずに使う",
        "isCorrect": false,
        "explanation": "無料なら規約を読まずに使うは正解ではありません。"
      },
      {
        "text": "管理者を決めずに利用する",
        "isCorrect": false,
        "explanation": "管理者を決めずに利用するは正解ではありません。"
      },
      {
        "text": "バックアップ方針を確認しない",
        "isCorrect": false,
        "explanation": "バックアップ方針を確認しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "システム障害への備えとして最も適切なものは？",
    "choices": [
      {
        "text": "復旧手順を整備し訓練する",
        "isCorrect": true,
        "explanation": "事前に復旧手順を整備し訓練することが重要です。"
      },
      {
        "text": "担当者の記憶だけに頼る",
        "isCorrect": false,
        "explanation": "担当者の記憶だけに頼るは正解ではありません。"
      },
      {
        "text": "障害時に初めて手順を作る",
        "isCorrect": false,
        "explanation": "障害時に初めて手順を作るは正解ではありません。"
      },
      {
        "text": "バックアップを取らない",
        "isCorrect": false,
        "explanation": "バックアップを取らないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "個人情報の取扱いとして最も適切なものは？",
    "choices": [
      {
        "text": "利用目的を明確にし、必要な範囲で取得する",
        "isCorrect": true,
        "explanation": "個人情報は目的と範囲を明確にして適切に扱います。"
      },
      {
        "text": "目的を示さず大量に集める",
        "isCorrect": false,
        "explanation": "目的を示さず大量に集めるは正解ではありません。"
      },
      {
        "text": "誰でも見られる場所に置く",
        "isCorrect": false,
        "explanation": "誰でも見られる場所に置くは正解ではありません。"
      },
      {
        "text": "不要になっても無期限に放置する",
        "isCorrect": false,
        "explanation": "不要になっても無期限に放置するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "著作物の利用として最も適切なものは？",
    "choices": [
      {
        "text": "利用条件や権利者の許諾を確認する",
        "isCorrect": true,
        "explanation": "著作物の利用には権利確認が必要です。"
      },
      {
        "text": "インターネット上なら自由に転載する",
        "isCorrect": false,
        "explanation": "インターネット上なら自由に転載するは正解ではありません。"
      },
      {
        "text": "出典を消して使う",
        "isCorrect": false,
        "explanation": "出典を消して使うは正解ではありません。"
      },
      {
        "text": "有料素材を無断で配布する",
        "isCorrect": false,
        "explanation": "有料素材を無断で配布するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "プロジェクト開始時に行うこととして最も適切なものは？",
    "choices": [
      {
        "text": "目的、範囲、体制、スケジュールを明確にする",
        "isCorrect": true,
        "explanation": "開始時に前提を明確にすると進行しやすくなります。"
      },
      {
        "text": "目的を決めずに作業を始める",
        "isCorrect": false,
        "explanation": "目的を決めずに作業を始めるは正解ではありません。"
      },
      {
        "text": "担当者を決めない",
        "isCorrect": false,
        "explanation": "担当者を決めないは正解ではありません。"
      },
      {
        "text": "成果物を定義しない",
        "isCorrect": false,
        "explanation": "成果物を定義しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "進捗が遅れている場合の対応として最も適切なものは？",
    "choices": [
      {
        "text": "原因を確認し、計画や体制を見直す",
        "isCorrect": true,
        "explanation": "遅れは早く共有し、原因に応じて対応します。"
      },
      {
        "text": "遅れを隠して報告しない",
        "isCorrect": false,
        "explanation": "遅れを隠して報告しないは正解ではありません。"
      },
      {
        "text": "関係者に知らせず放置する",
        "isCorrect": false,
        "explanation": "関係者に知らせず放置するは正解ではありません。"
      },
      {
        "text": "品質確認をすべて省略する",
        "isCorrect": false,
        "explanation": "品質確認をすべて省略するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "要件変更が発生した場合の対応として最も適切なものは？",
    "choices": [
      {
        "text": "影響範囲を評価し、承認を得て反映する",
        "isCorrect": true,
        "explanation": "要件変更は影響確認と合意が必要です。"
      },
      {
        "text": "口頭だけで勝手に変更する",
        "isCorrect": false,
        "explanation": "口頭だけで勝手に変更するは正解ではありません。"
      },
      {
        "text": "記録せずに実装する",
        "isCorrect": false,
        "explanation": "記録せずに実装するは正解ではありません。"
      },
      {
        "text": "他工程への影響を考えない",
        "isCorrect": false,
        "explanation": "他工程への影響を考えないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "テストで不具合を発見した場合の対応として最も適切なものは？",
    "choices": [
      {
        "text": "内容、再現手順、影響を記録して修正する",
        "isCorrect": true,
        "explanation": "不具合管理では記録と再現性が重要です。"
      },
      {
        "text": "不具合を隠す",
        "isCorrect": false,
        "explanation": "不具合を隠すは正解ではありません。"
      },
      {
        "text": "再現確認をしない",
        "isCorrect": false,
        "explanation": "再現確認をしないは正解ではありません。"
      },
      {
        "text": "本番環境だけで試す",
        "isCorrect": false,
        "explanation": "本番環境だけで試すは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "データベース設計で正規化を行う目的として最も適切なものは？",
    "choices": [
      {
        "text": "データの重複や更新時の矛盾を減らす",
        "isCorrect": true,
        "explanation": "正規化は重複や不整合を抑える設計です。"
      },
      {
        "text": "画面の色を統一する",
        "isCorrect": false,
        "explanation": "画面の色を統一するは正解ではありません。"
      },
      {
        "text": "通信速度を必ず上げる",
        "isCorrect": false,
        "explanation": "通信速度を必ず上げるは正解ではありません。"
      },
      {
        "text": "ファイルサイズを常にゼロにする",
        "isCorrect": false,
        "explanation": "ファイルサイズを常にゼロにするは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "アクセス権限の設定として最も適切なものは？",
    "choices": [
      {
        "text": "業務に必要な最小限の権限を付与する",
        "isCorrect": true,
        "explanation": "最小権限の原則が重要です。"
      },
      {
        "text": "全員に管理者権限を与える",
        "isCorrect": false,
        "explanation": "全員に管理者権限を与えるは正解ではありません。"
      },
      {
        "text": "退職者にも権限を残す",
        "isCorrect": false,
        "explanation": "退職者にも権限を残すは正解ではありません。"
      },
      {
        "text": "権限の見直しをしない",
        "isCorrect": false,
        "explanation": "権限の見直しをしないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "ログ管理として最も適切なものは？",
    "choices": [
      {
        "text": "必要なログを保存し、不正や障害の調査に使えるようにする",
        "isCorrect": true,
        "explanation": "ログは監査や原因調査に役立ちます。"
      },
      {
        "text": "ログをすべて即時削除する",
        "isCorrect": false,
        "explanation": "ログをすべて即時削除するは正解ではありません。"
      },
      {
        "text": "改ざんできる状態で放置する",
        "isCorrect": false,
        "explanation": "改ざんできる状態で放置するは正解ではありません。"
      },
      {
        "text": "時刻を記録しない",
        "isCorrect": false,
        "explanation": "時刻を記録しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "標的型攻撃への教育として最も適切なものは？",
    "choices": [
      {
        "text": "不審メールの見分け方や報告手順を訓練する",
        "isCorrect": true,
        "explanation": "教育と報告体制は被害拡大防止に有効です。"
      },
      {
        "text": "教育を一切行わない",
        "isCorrect": false,
        "explanation": "教育を一切行わないは正解ではありません。"
      },
      {
        "text": "添付ファイルを必ず開くよう指示する",
        "isCorrect": false,
        "explanation": "添付ファイルを必ず開くよう指示するは正解ではありません。"
      },
      {
        "text": "報告先を決めない",
        "isCorrect": false,
        "explanation": "報告先を決めないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "スマートフォン紛失時の対策として最も適切なものは？",
    "choices": [
      {
        "text": "画面ロック、遠隔消去、管理者への報告を行う",
        "isCorrect": true,
        "explanation": "モバイル端末には紛失対策が必要です。"
      },
      {
        "text": "ロックを設定しない",
        "isCorrect": false,
        "explanation": "ロックを設定しないは正解ではありません。"
      },
      {
        "text": "紛失しても放置する",
        "isCorrect": false,
        "explanation": "紛失しても放置するは正解ではありません。"
      },
      {
        "text": "業務情報を暗号化せず保存する",
        "isCorrect": false,
        "explanation": "業務情報を暗号化せず保存するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "無線LANの安全な利用として最も適切なものは？",
    "choices": [
      {
        "text": "強固な暗号化方式と適切なパスワードを使う",
        "isCorrect": true,
        "explanation": "無線LANは暗号化と認証設定が重要です。"
      },
      {
        "text": "初期パスワードのまま公開する",
        "isCorrect": false,
        "explanation": "初期パスワードのまま公開するは正解ではありません。"
      },
      {
        "text": "暗号化なしで使う",
        "isCorrect": false,
        "explanation": "暗号化なしで使うは正解ではありません。"
      },
      {
        "text": "誰でも管理画面に入れるようにする",
        "isCorrect": false,
        "explanation": "誰でも管理画面に入れるようにするは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "ソフトウェア更新の運用として最も適切なものは？",
    "choices": [
      {
        "text": "影響を確認しながら脆弱性修正を適用する",
        "isCorrect": true,
        "explanation": "更新は脆弱性対策として重要です。"
      },
      {
        "text": "更新を永久に止める",
        "isCorrect": false,
        "explanation": "更新を永久に止めるは正解ではありません。"
      },
      {
        "text": "出所不明の更新ファイルを使う",
        "isCorrect": false,
        "explanation": "出所不明の更新ファイルを使うは正解ではありません。"
      },
      {
        "text": "脆弱性情報を確認しない",
        "isCorrect": false,
        "explanation": "脆弱性情報を確認しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "在宅勤務時のセキュリティ対策として最も適切なものは？",
    "choices": [
      {
        "text": "VPNや多要素認証など会社のルールに従う",
        "isCorrect": true,
        "explanation": "在宅勤務でも会社のセキュリティルールを守ります。"
      },
      {
        "text": "公共PCに機密情報を保存する",
        "isCorrect": false,
        "explanation": "公共PCに機密情報を保存するは正解ではありません。"
      },
      {
        "text": "家族と業務IDを共有する",
        "isCorrect": false,
        "explanation": "家族と業務IDを共有するは正解ではありません。"
      },
      {
        "text": "画面ロックを使わない",
        "isCorrect": false,
        "explanation": "画面ロックを使わないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "BCP策定で最も適切な考え方は？",
    "choices": [
      {
        "text": "重要業務と復旧優先度を決める",
        "isCorrect": true,
        "explanation": "BCPでは重要業務と復旧方針を整理します。"
      },
      {
        "text": "すべての業務を同時に完全復旧すると決めるだけ",
        "isCorrect": false,
        "explanation": "すべての業務を同時に完全復旧すると決めるだけは正解ではありません。"
      },
      {
        "text": "災害後に初めて担当者を決める",
        "isCorrect": false,
        "explanation": "災害後に初めて担当者を決めるは正解ではありません。"
      },
      {
        "text": "バックアップを不要とする",
        "isCorrect": false,
        "explanation": "バックアップを不要とするは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "KPI設定として最も適切なものは？",
    "choices": [
      {
        "text": "目標達成度を測れる具体的な指標にする",
        "isCorrect": true,
        "explanation": "KPIは具体的で測定可能な指標が望ましいです。"
      },
      {
        "text": "測定できない感想にする",
        "isCorrect": false,
        "explanation": "測定できない感想にするは正解ではありません。"
      },
      {
        "text": "担当者が理解できない指標にする",
        "isCorrect": false,
        "explanation": "担当者が理解できない指標にするは正解ではありません。"
      },
      {
        "text": "目標と関係ない数値にする",
        "isCorrect": false,
        "explanation": "目標と関係ない数値にするは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "業務改善の進め方として最も適切なものは？",
    "choices": [
      {
        "text": "現状を把握し、問題点を分析して改善策を実施する",
        "isCorrect": true,
        "explanation": "業務改善では現状把握、分析、実施、評価が重要です。"
      },
      {
        "text": "現状を見ずに思いつきで変更する",
        "isCorrect": false,
        "explanation": "現状を見ずに思いつきで変更するは正解ではありません。"
      },
      {
        "text": "改善後の効果を確認しない",
        "isCorrect": false,
        "explanation": "改善後の効果を確認しないは正解ではありません。"
      },
      {
        "text": "関係者に説明しない",
        "isCorrect": false,
        "explanation": "関係者に説明しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "システム化対象を決める際に最も適切なものは？",
    "choices": [
      {
        "text": "効果、費用、リスク、業務への影響を評価する",
        "isCorrect": true,
        "explanation": "システム化は投資対効果や影響を考えます。"
      },
      {
        "text": "流行しているから無条件に導入する",
        "isCorrect": false,
        "explanation": "流行しているから無条件に導入するは正解ではありません。"
      },
      {
        "text": "利用者の意見を聞かない",
        "isCorrect": false,
        "explanation": "利用者の意見を聞かないは正解ではありません。"
      },
      {
        "text": "費用を確認しない",
        "isCorrect": false,
        "explanation": "費用を確認しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "委託先管理として最も適切なものは？",
    "choices": [
      {
        "text": "契約やセキュリティ要件を明確にし履行状況を確認する",
        "isCorrect": true,
        "explanation": "委託先にも適切な管理が必要です。"
      },
      {
        "text": "委託後は一切確認しない",
        "isCorrect": false,
        "explanation": "委託後は一切確認しないは正解ではありません。"
      },
      {
        "text": "機密情報を無制限に渡す",
        "isCorrect": false,
        "explanation": "機密情報を無制限に渡すは正解ではありません。"
      },
      {
        "text": "契約書を作らない",
        "isCorrect": false,
        "explanation": "契約書を作らないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "リスク対応策として最も適切なものは？",
    "choices": [
      {
        "text": "発生確率と影響を評価して対策を選ぶ",
        "isCorrect": true,
        "explanation": "リスクは評価に基づいて対応します。"
      },
      {
        "text": "すべてのリスクを無視する",
        "isCorrect": false,
        "explanation": "すべてのリスクを無視するは正解ではありません。"
      },
      {
        "text": "影響が大きいリスクを放置する",
        "isCorrect": false,
        "explanation": "影響が大きいリスクを放置するは正解ではありません。"
      },
      {
        "text": "評価せずに偶然に任せる",
        "isCorrect": false,
        "explanation": "評価せずに偶然に任せるは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "会計情報の活用として最も適切なものは？",
    "choices": [
      {
        "text": "収益性や安全性を分析し経営判断に使う",
        "isCorrect": true,
        "explanation": "会計情報は経営状態の把握に役立ちます。"
      },
      {
        "text": "数字を確認せず判断する",
        "isCorrect": false,
        "explanation": "数字を確認せず判断するは正解ではありません。"
      },
      {
        "text": "売上だけ見て費用を無視する",
        "isCorrect": false,
        "explanation": "売上だけ見て費用を無視するは正解ではありません。"
      },
      {
        "text": "財務諸表を廃棄する",
        "isCorrect": false,
        "explanation": "財務諸表を廃棄するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "マーケティング施策の検討として最も適切なものは？",
    "choices": [
      {
        "text": "顧客、競合、自社の状況を分析する",
        "isCorrect": true,
        "explanation": "市場環境の分析が施策立案に役立ちます。"
      },
      {
        "text": "顧客ニーズを無視する",
        "isCorrect": false,
        "explanation": "顧客ニーズを無視するは正解ではありません。"
      },
      {
        "text": "競合を一切調べない",
        "isCorrect": false,
        "explanation": "競合を一切調べないは正解ではありません。"
      },
      {
        "text": "価格だけを勘で決める",
        "isCorrect": false,
        "explanation": "価格だけを勘で決めるは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "アクセシビリティ向上策として最も適切なものは？",
    "choices": [
      {
        "text": "文字サイズや色の見やすさ、代替テキストを考慮する",
        "isCorrect": true,
        "explanation": "多様な利用者が使えるよう配慮します。"
      },
      {
        "text": "小さい文字だけを使う",
        "isCorrect": false,
        "explanation": "小さい文字だけを使うは正解ではありません。"
      },
      {
        "text": "色だけで情報を伝える",
        "isCorrect": false,
        "explanation": "色だけで情報を伝えるは正解ではありません。"
      },
      {
        "text": "キーボード操作をできなくする",
        "isCorrect": false,
        "explanation": "キーボード操作をできなくするは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "AI活用時の注意として最も適切なものは？",
    "choices": [
      {
        "text": "出力結果の正確性や偏りを確認する",
        "isCorrect": true,
        "explanation": "AIの出力は確認と適切な利用が必要です。"
      },
      {
        "text": "出力を必ず正しいものとして扱う",
        "isCorrect": false,
        "explanation": "出力を必ず正しいものとして扱うは正解ではありません。"
      },
      {
        "text": "個人情報を無断で入力する",
        "isCorrect": false,
        "explanation": "個人情報を無断で入力するは正解ではありません。"
      },
      {
        "text": "利用目的を考えない",
        "isCorrect": false,
        "explanation": "利用目的を考えないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "データ分析の前処理として最も適切なものは？",
    "choices": [
      {
        "text": "欠損値や重複、形式の不一致を確認する",
        "isCorrect": true,
        "explanation": "分析前にはデータ品質の確認が必要です。"
      },
      {
        "text": "データの内容を見ずに分析する",
        "isCorrect": false,
        "explanation": "データの内容を見ずに分析するは正解ではありません。"
      },
      {
        "text": "重複を増やす",
        "isCorrect": false,
        "explanation": "重複を増やすは正解ではありません。"
      },
      {
        "text": "異常値を必ず正しいと決める",
        "isCorrect": false,
        "explanation": "異常値を必ず正しいと決めるは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "RPA導入に向く業務として最も適切なものは？",
    "choices": [
      {
        "text": "手順が決まった定型的な入力作業",
        "isCorrect": true,
        "explanation": "RPAは定型作業の自動化に向いています。"
      },
      {
        "text": "毎回高度な経営判断が必要な業務",
        "isCorrect": false,
        "explanation": "毎回高度な経営判断が必要な業務は正解ではありません。"
      },
      {
        "text": "例外だらけで手順化できない業務",
        "isCorrect": false,
        "explanation": "例外だらけで手順化できない業務は正解ではありません。"
      },
      {
        "text": "創造的な企画立案だけの業務",
        "isCorrect": false,
        "explanation": "創造的な企画立案だけの業務は正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "IoT機器の管理として最も適切なものは？",
    "choices": [
      {
        "text": "初期パスワードを変更し、更新や接続先を管理する",
        "isCorrect": true,
        "explanation": "IoT機器もセキュリティ管理が必要です。"
      },
      {
        "text": "初期設定のまま放置する",
        "isCorrect": false,
        "explanation": "初期設定のまま放置するは正解ではありません。"
      },
      {
        "text": "管理者を決めない",
        "isCorrect": false,
        "explanation": "管理者を決めないは正解ではありません。"
      },
      {
        "text": "不要な通信を許可する",
        "isCorrect": false,
        "explanation": "不要な通信を許可するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "情報資産の分類として最も適切なものは？",
    "choices": [
      {
        "text": "重要度や機密度に応じて分類する",
        "isCorrect": true,
        "explanation": "分類により適切な保護レベルを決められます。"
      },
      {
        "text": "すべて同じ扱いにする",
        "isCorrect": false,
        "explanation": "すべて同じ扱いにするは正解ではありません。"
      },
      {
        "text": "分類せず外部公開する",
        "isCorrect": false,
        "explanation": "分類せず外部公開するは正解ではありません。"
      },
      {
        "text": "重要情報だけ管理対象から外す",
        "isCorrect": false,
        "explanation": "重要情報だけ管理対象から外すは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "紙文書の廃棄として最も適切なものは？",
    "choices": [
      {
        "text": "機密度に応じて裁断や溶解処理を行う",
        "isCorrect": true,
        "explanation": "機密文書は復元困難な方法で廃棄します。"
      },
      {
        "text": "そのままごみ箱に捨てる",
        "isCorrect": false,
        "explanation": "そのままごみ箱に捨てるは正解ではありません。"
      },
      {
        "text": "誰でも持ち帰れるようにする",
        "isCorrect": false,
        "explanation": "誰でも持ち帰れるようにするは正解ではありません。"
      },
      {
        "text": "廃棄記録を不要にする",
        "isCorrect": false,
        "explanation": "廃棄記録を不要にするは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "ライセンス管理として最も適切なものは？",
    "choices": [
      {
        "text": "利用条件と導入数を管理する",
        "isCorrect": true,
        "explanation": "ソフトウェアはライセンス条件に従って利用します。"
      },
      {
        "text": "無断コピーして使う",
        "isCorrect": false,
        "explanation": "無断コピーして使うは正解ではありません。"
      },
      {
        "text": "契約数を超えて利用する",
        "isCorrect": false,
        "explanation": "契約数を超えて利用するは正解ではありません。"
      },
      {
        "text": "ライセンス証書を廃棄する",
        "isCorrect": false,
        "explanation": "ライセンス証書を廃棄するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "オープンソースソフトウェア利用時に最も適切なものは？",
    "choices": [
      {
        "text": "ライセンス条件を確認して利用する",
        "isCorrect": true,
        "explanation": "OSSにもライセンス条件があります。"
      },
      {
        "text": "無料なら条件を無視する",
        "isCorrect": false,
        "explanation": "無料なら条件を無視するは正解ではありません。"
      },
      {
        "text": "著作権表示を必ず削除する",
        "isCorrect": false,
        "explanation": "著作権表示を必ず削除するは正解ではありません。"
      },
      {
        "text": "配布条件を確認しない",
        "isCorrect": false,
        "explanation": "配布条件を確認しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "パスワードを忘れた利用者への対応として最も適切なものは？",
    "choices": [
      {
        "text": "本人確認後、所定の手順で再設定する",
        "isCorrect": true,
        "explanation": "再設定には本人確認と安全な手順が必要です。"
      },
      {
        "text": "本人確認なしで教える",
        "isCorrect": false,
        "explanation": "本人確認なしで教えるは正解ではありません。"
      },
      {
        "text": "管理者が平文で保存して渡す",
        "isCorrect": false,
        "explanation": "管理者が平文で保存して渡すは正解ではありません。"
      },
      {
        "text": "他人のパスワードを使わせる",
        "isCorrect": false,
        "explanation": "他人のパスワードを使わせるは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "情報漏えい発生時の初動として最も適切なものは？",
    "choices": [
      {
        "text": "関係者へ報告し、被害範囲を確認して拡大を防ぐ",
        "isCorrect": true,
        "explanation": "初動では報告、封じ込め、調査が重要です。"
      },
      {
        "text": "隠して通常業務を続ける",
        "isCorrect": false,
        "explanation": "隠して通常業務を続けるは正解ではありません。"
      },
      {
        "text": "証拠を削除する",
        "isCorrect": false,
        "explanation": "証拠を削除するは正解ではありません。"
      },
      {
        "text": "原因調査をしない",
        "isCorrect": false,
        "explanation": "原因調査をしないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "脆弱性情報を入手した場合の対応として最も適切なものは？",
    "choices": [
      {
        "text": "影響を確認し、修正プログラム適用などを検討する",
        "isCorrect": true,
        "explanation": "脆弱性は自社環境への影響確認が必要です。"
      },
      {
        "text": "関係ないと決めつける",
        "isCorrect": false,
        "explanation": "関係ないと決めつけるは正解ではありません。"
      },
      {
        "text": "情報を削除する",
        "isCorrect": false,
        "explanation": "情報を削除するは正解ではありません。"
      },
      {
        "text": "攻撃方法を社外に広める",
        "isCorrect": false,
        "explanation": "攻撃方法を社外に広めるは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "ネットワーク分離の目的として最も適切なものは？",
    "choices": [
      {
        "text": "被害や不要な通信の範囲を限定する",
        "isCorrect": true,
        "explanation": "ネットワーク分離はリスク低減に役立ちます。"
      },
      {
        "text": "通信を必ず全開放する",
        "isCorrect": false,
        "explanation": "通信を必ず全開放するは正解ではありません。"
      },
      {
        "text": "すべての権限を共有する",
        "isCorrect": false,
        "explanation": "すべての権限を共有するは正解ではありません。"
      },
      {
        "text": "バックアップを不要にする",
        "isCorrect": false,
        "explanation": "バックアップを不要にするは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "機密情報を送信する場合に最も適切なものは？",
    "choices": [
      {
        "text": "暗号化やアクセス制限を行い、送信先を確認する",
        "isCorrect": true,
        "explanation": "機密情報は送信方法と宛先確認が重要です。"
      },
      {
        "text": "誰でも見られる掲示板に載せる",
        "isCorrect": false,
        "explanation": "誰でも見られる掲示板に載せるは正解ではありません。"
      },
      {
        "text": "宛先を確認しない",
        "isCorrect": false,
        "explanation": "宛先を確認しないは正解ではありません。"
      },
      {
        "text": "平文で大量送信する",
        "isCorrect": false,
        "explanation": "平文で大量送信するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "会議資料の共有として最も適切なものは？",
    "choices": [
      {
        "text": "必要な参加者だけにアクセス権を付与する",
        "isCorrect": true,
        "explanation": "資料は必要な範囲に限定して共有します。"
      },
      {
        "text": "全社員に無条件公開する",
        "isCorrect": false,
        "explanation": "全社員に無条件公開するは正解ではありません。"
      },
      {
        "text": "外部公開リンクを無期限にする",
        "isCorrect": false,
        "explanation": "外部公開リンクを無期限にするは正解ではありません。"
      },
      {
        "text": "権限設定を確認しない",
        "isCorrect": false,
        "explanation": "権限設定を確認しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "データ入力ミスを減らす方法として最も適切なものは？",
    "choices": [
      {
        "text": "入力チェックや選択式入力を用いる",
        "isCorrect": true,
        "explanation": "入力チェックは誤入力防止に有効です。"
      },
      {
        "text": "自由入力だけにして確認しない",
        "isCorrect": false,
        "explanation": "自由入力だけにして確認しないは正解ではありません。"
      },
      {
        "text": "エラー表示をなくす",
        "isCorrect": false,
        "explanation": "エラー表示をなくすは正解ではありません。"
      },
      {
        "text": "入力後の確認を禁止する",
        "isCorrect": false,
        "explanation": "入力後の確認を禁止するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "在庫管理システム導入の効果として最も適切なものは？",
    "choices": [
      {
        "text": "在庫数の把握や発注判断をしやすくする",
        "isCorrect": true,
        "explanation": "在庫管理は数量把握や発注の効率化に役立ちます。"
      },
      {
        "text": "在庫を必ずゼロにする",
        "isCorrect": false,
        "explanation": "在庫を必ずゼロにするは正解ではありません。"
      },
      {
        "text": "会計処理を禁止する",
        "isCorrect": false,
        "explanation": "会計処理を禁止するは正解ではありません。"
      },
      {
        "text": "商品情報を消す",
        "isCorrect": false,
        "explanation": "商品情報を消すは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "顧客管理システムの目的として最も適切なものは？",
    "choices": [
      {
        "text": "顧客情報や対応履歴を活用する",
        "isCorrect": true,
        "explanation": "CRMは顧客関係の強化に使われます。"
      },
      {
        "text": "顧客情報を削除するだけ",
        "isCorrect": false,
        "explanation": "顧客情報を削除するだけは正解ではありません。"
      },
      {
        "text": "通信を暗号化するだけ",
        "isCorrect": false,
        "explanation": "通信を暗号化するだけは正解ではありません。"
      },
      {
        "text": "製造機械を制御するだけ",
        "isCorrect": false,
        "explanation": "製造機械を制御するだけは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "サプライチェーン管理の目的として最も適切なものは？",
    "choices": [
      {
        "text": "調達から販売までの流れを最適化する",
        "isCorrect": true,
        "explanation": "SCMは供給連鎖全体の効率化を目指します。"
      },
      {
        "text": "広告文だけを作る",
        "isCorrect": false,
        "explanation": "広告文だけを作るは正解ではありません。"
      },
      {
        "text": "社員証を発行する",
        "isCorrect": false,
        "explanation": "社員証を発行するは正解ではありません。"
      },
      {
        "text": "画面の色を決める",
        "isCorrect": false,
        "explanation": "画面の色を決めるは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "損益分岐点を下げる施策として最も適切なものは？",
    "choices": [
      {
        "text": "固定費を削減する",
        "isCorrect": true,
        "explanation": "固定費削減は損益分岐点を下げる方向に働きます。"
      },
      {
        "text": "固定費を増やす",
        "isCorrect": false,
        "explanation": "固定費を増やすは正解ではありません。"
      },
      {
        "text": "変動費率を上げる",
        "isCorrect": false,
        "explanation": "変動費率を上げるは正解ではありません。"
      },
      {
        "text": "販売価格を下げ利益率を下げる",
        "isCorrect": false,
        "explanation": "販売価格を下げ利益率を下げるは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "品質管理でチェックシートを使う目的として最も適切なものは？",
    "choices": [
      {
        "text": "発生状況を記録し分析しやすくする",
        "isCorrect": true,
        "explanation": "チェックシートはデータ収集と分析に役立ちます。"
      },
      {
        "text": "記録を残さない",
        "isCorrect": false,
        "explanation": "記録を残さないは正解ではありません。"
      },
      {
        "text": "原因を隠す",
        "isCorrect": false,
        "explanation": "原因を隠すは正解ではありません。"
      },
      {
        "text": "検査をすべて省略する",
        "isCorrect": false,
        "explanation": "検査をすべて省略するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "ブレーンストーミングで最も適切な進め方は？",
    "choices": [
      {
        "text": "批判を控えて多くのアイデアを出す",
        "isCorrect": true,
        "explanation": "ブレーンストーミングでは自由な発想を促します。"
      },
      {
        "text": "最初から否定する",
        "isCorrect": false,
        "explanation": "最初から否定するは正解ではありません。"
      },
      {
        "text": "発言者を一人に限定する",
        "isCorrect": false,
        "explanation": "発言者を一人に限定するは正解ではありません。"
      },
      {
        "text": "記録を残さない",
        "isCorrect": false,
        "explanation": "記録を残さないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "SWOT分析で脅威に当たるものとして最も適切なものは？",
    "choices": [
      {
        "text": "競合の新規参入",
        "isCorrect": true,
        "explanation": "脅威は外部環境のマイナス要因です。"
      },
      {
        "text": "自社の高い技術力",
        "isCorrect": false,
        "explanation": "自社の高い技術力は正解ではありません。"
      },
      {
        "text": "自社の人材不足",
        "isCorrect": false,
        "explanation": "自社の人材不足は正解ではありません。"
      },
      {
        "text": "市場拡大の機会",
        "isCorrect": false,
        "explanation": "市場拡大の機会は正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "4PのPriceに該当する検討として最も適切なものは？",
    "choices": [
      {
        "text": "販売価格の設定",
        "isCorrect": true,
        "explanation": "Priceは価格戦略を指します。"
      },
      {
        "text": "商品の機能設計",
        "isCorrect": false,
        "explanation": "商品の機能設計は正解ではありません。"
      },
      {
        "text": "販売チャネルの選択",
        "isCorrect": false,
        "explanation": "販売チャネルの選択は正解ではありません。"
      },
      {
        "text": "広告宣伝の方法",
        "isCorrect": false,
        "explanation": "広告宣伝の方法は正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "サブスクリプションモデルで重視する指標として最も適切なものは？",
    "choices": [
      {
        "text": "継続率や解約率",
        "isCorrect": true,
        "explanation": "継続課金では解約率や継続率が重要です。"
      },
      {
        "text": "紙の厚さ",
        "isCorrect": false,
        "explanation": "紙の厚さは正解ではありません。"
      },
      {
        "text": "CPU温度",
        "isCorrect": false,
        "explanation": "CPU温度は正解ではありません。"
      },
      {
        "text": "印刷枚数だけ",
        "isCorrect": false,
        "explanation": "印刷枚数だけは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "システム監査の目的として最も適切なものは？",
    "choices": [
      {
        "text": "情報システムの信頼性や安全性を評価する",
        "isCorrect": true,
        "explanation": "システム監査は統制やリスク対応を評価します。"
      },
      {
        "text": "システムを必ず停止する",
        "isCorrect": false,
        "explanation": "システムを必ず停止するは正解ではありません。"
      },
      {
        "text": "監査記録を残さない",
        "isCorrect": false,
        "explanation": "監査記録を残さないは正解ではありません。"
      },
      {
        "text": "利用者に権限を無制限に与える",
        "isCorrect": false,
        "explanation": "利用者に権限を無制限に与えるは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "内部統制の整備として最も適切なものは？",
    "choices": [
      {
        "text": "職務分掌や承認手続きを設ける",
        "isCorrect": true,
        "explanation": "内部統制は不正や誤りの防止に役立ちます。"
      },
      {
        "text": "一人が全てを無確認で行う",
        "isCorrect": false,
        "explanation": "一人が全てを無確認で行うは正解ではありません。"
      },
      {
        "text": "記録を残さない",
        "isCorrect": false,
        "explanation": "記録を残さないは正解ではありません。"
      },
      {
        "text": "承認を禁止する",
        "isCorrect": false,
        "explanation": "承認を禁止するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "反社会的勢力への対応として最も適切なものは？",
    "choices": [
      {
        "text": "関係遮断の方針を明確にし組織で対応する",
        "isCorrect": true,
        "explanation": "コンプライアンス上、組織的な対応が必要です。"
      },
      {
        "text": "個人判断で取引を続ける",
        "isCorrect": false,
        "explanation": "個人判断で取引を続けるは正解ではありません。"
      },
      {
        "text": "記録を残さない",
        "isCorrect": false,
        "explanation": "記録を残さないは正解ではありません。"
      },
      {
        "text": "利益があれば無条件に取引する",
        "isCorrect": false,
        "explanation": "利益があれば無条件に取引するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "個人情報の委託先への提供として最も適切なものは？",
    "choices": [
      {
        "text": "委託契約で安全管理措置を定め監督する",
        "isCorrect": true,
        "explanation": "委託先にも安全管理を求める必要があります。"
      },
      {
        "text": "契約なしで自由に渡す",
        "isCorrect": false,
        "explanation": "契約なしで自由に渡すは正解ではありません。"
      },
      {
        "text": "利用目的を無視する",
        "isCorrect": false,
        "explanation": "利用目的を無視するは正解ではありません。"
      },
      {
        "text": "委託先を確認しない",
        "isCorrect": false,
        "explanation": "委託先を確認しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "システム利用者教育で最も適切なものは？",
    "choices": [
      {
        "text": "利用ルールやセキュリティ注意点を定期的に周知する",
        "isCorrect": true,
        "explanation": "継続的な教育は事故防止に役立ちます。"
      },
      {
        "text": "一度も教育しない",
        "isCorrect": false,
        "explanation": "一度も教育しないは正解ではありません。"
      },
      {
        "text": "禁止事項だけを曖昧にする",
        "isCorrect": false,
        "explanation": "禁止事項だけを曖昧にするは正解ではありません。"
      },
      {
        "text": "事故時の連絡先を教えない",
        "isCorrect": false,
        "explanation": "事故時の連絡先を教えないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "チャットツールで機密情報を扱う場合に最も適切なものは？",
    "choices": [
      {
        "text": "アクセス権や投稿先を確認して送信する",
        "isCorrect": true,
        "explanation": "送信先と権限の確認が必要です。"
      },
      {
        "text": "公開チャンネルに無条件投稿する",
        "isCorrect": false,
        "explanation": "公開チャンネルに無条件投稿するは正解ではありません。"
      },
      {
        "text": "外部ユーザーを確認しない",
        "isCorrect": false,
        "explanation": "外部ユーザーを確認しないは正解ではありません。"
      },
      {
        "text": "誤投稿しても削除だけで報告しない",
        "isCorrect": false,
        "explanation": "誤投稿しても削除だけで報告しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "ファイル共有サービスの利用として最も適切なものは？",
    "choices": [
      {
        "text": "共有範囲と有効期限を設定する",
        "isCorrect": true,
        "explanation": "共有リンクは範囲と期限を管理します。"
      },
      {
        "text": "無期限の公開リンクを使う",
        "isCorrect": false,
        "explanation": "無期限の公開リンクを使うは正解ではありません。"
      },
      {
        "text": "誰でも編集可にする",
        "isCorrect": false,
        "explanation": "誰でも編集可にするは正解ではありません。"
      },
      {
        "text": "退職者のアクセスを残す",
        "isCorrect": false,
        "explanation": "退職者のアクセスを残すは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "テレワーク端末の管理として最も適切なものは？",
    "choices": [
      {
        "text": "OS更新、ウイルス対策、紛失対策を行う",
        "isCorrect": true,
        "explanation": "テレワーク端末も社内端末と同様に管理します。"
      },
      {
        "text": "私物端末を無制限に使う",
        "isCorrect": false,
        "explanation": "私物端末を無制限に使うは正解ではありません。"
      },
      {
        "text": "更新を止める",
        "isCorrect": false,
        "explanation": "更新を止めるは正解ではありません。"
      },
      {
        "text": "画面ロックを無効にする",
        "isCorrect": false,
        "explanation": "画面ロックを無効にするは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "データの可視化で最も適切なものは？",
    "choices": [
      {
        "text": "目的に合うグラフを選び、誤解を招かない表示にする",
        "isCorrect": true,
        "explanation": "可視化では正確で読み取りやすい表現が重要です。"
      },
      {
        "text": "軸を意図的に隠す",
        "isCorrect": false,
        "explanation": "軸を意図的に隠すは正解ではありません。"
      },
      {
        "text": "目的と無関係なグラフを使う",
        "isCorrect": false,
        "explanation": "目的と無関係なグラフを使うは正解ではありません。"
      },
      {
        "text": "単位を表示しない",
        "isCorrect": false,
        "explanation": "単位を表示しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "アンケート設計で最も適切なものは？",
    "choices": [
      {
        "text": "目的に合う質問を作り、回答しやすくする",
        "isCorrect": true,
        "explanation": "アンケートは目的と回答しやすさを考えます。"
      },
      {
        "text": "誘導的な質問だけにする",
        "isCorrect": false,
        "explanation": "誘導的な質問だけにするは正解ではありません。"
      },
      {
        "text": "目的と無関係な質問を増やす",
        "isCorrect": false,
        "explanation": "目的と無関係な質問を増やすは正解ではありません。"
      },
      {
        "text": "回答選択肢を不明確にする",
        "isCorrect": false,
        "explanation": "回答選択肢を不明確にするは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "データを外部提供する前に最も適切なものは？",
    "choices": [
      {
        "text": "個人情報や機密情報の有無を確認する",
        "isCorrect": true,
        "explanation": "外部提供前には情報の内容と提供目的を確認します。"
      },
      {
        "text": "確認せず送る",
        "isCorrect": false,
        "explanation": "確認せず送るは正解ではありません。"
      },
      {
        "text": "不要なデータもすべて含める",
        "isCorrect": false,
        "explanation": "不要なデータもすべて含めるは正解ではありません。"
      },
      {
        "text": "提供先を記録しない",
        "isCorrect": false,
        "explanation": "提供先を記録しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "システムの運用監視として最も適切なものは？",
    "choices": [
      {
        "text": "稼働状況や異常を検知し対応できるようにする",
        "isCorrect": true,
        "explanation": "監視は安定運用と早期対応に役立ちます。"
      },
      {
        "text": "異常通知を止める",
        "isCorrect": false,
        "explanation": "異常通知を止めるは正解ではありません。"
      },
      {
        "text": "監視記録を残さない",
        "isCorrect": false,
        "explanation": "監視記録を残さないは正解ではありません。"
      },
      {
        "text": "障害を利用者に隠す",
        "isCorrect": false,
        "explanation": "障害を利用者に隠すは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "サービスレベル管理として最も適切なものは？",
    "choices": [
      {
        "text": "可用性や応答時間などの目標を定めて管理する",
        "isCorrect": true,
        "explanation": "サービスレベルは合意と実績管理が大切です。"
      },
      {
        "text": "目標を決めずに運用する",
        "isCorrect": false,
        "explanation": "目標を決めずに運用するは正解ではありません。"
      },
      {
        "text": "利用者と合意しない",
        "isCorrect": false,
        "explanation": "利用者と合意しないは正解ではありません。"
      },
      {
        "text": "実績を測定しない",
        "isCorrect": false,
        "explanation": "実績を測定しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "変更管理として最も適切なものは？",
    "choices": [
      {
        "text": "変更内容、影響、承認、実施結果を記録する",
        "isCorrect": true,
        "explanation": "変更管理は障害リスクを下げます。"
      },
      {
        "text": "本番環境を無断変更する",
        "isCorrect": false,
        "explanation": "本番環境を無断変更するは正解ではありません。"
      },
      {
        "text": "影響確認をしない",
        "isCorrect": false,
        "explanation": "影響確認をしないは正解ではありません。"
      },
      {
        "text": "戻し手順を用意しない",
        "isCorrect": false,
        "explanation": "戻し手順を用意しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "構成管理として最も適切なものは？",
    "choices": [
      {
        "text": "機器やソフトウェアの構成情報を管理する",
        "isCorrect": true,
        "explanation": "構成管理は運用や障害対応に役立ちます。"
      },
      {
        "text": "資産情報を残さない",
        "isCorrect": false,
        "explanation": "資産情報を残さないは正解ではありません。"
      },
      {
        "text": "変更履歴を消す",
        "isCorrect": false,
        "explanation": "変更履歴を消すは正解ではありません。"
      },
      {
        "text": "誰でも勝手に構成変更する",
        "isCorrect": false,
        "explanation": "誰でも勝手に構成変更するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "サービスデスクの役割として最も適切なものは？",
    "choices": [
      {
        "text": "問い合わせや障害連絡の窓口になる",
        "isCorrect": true,
        "explanation": "サービスデスクは利用者対応の窓口です。"
      },
      {
        "text": "障害を記録しない",
        "isCorrect": false,
        "explanation": "障害を記録しないは正解ではありません。"
      },
      {
        "text": "利用者の連絡を拒否する",
        "isCorrect": false,
        "explanation": "利用者の連絡を拒否するは正解ではありません。"
      },
      {
        "text": "全権限を無制限に付与する",
        "isCorrect": false,
        "explanation": "全権限を無制限に付与するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "インシデント管理として最も適切なものは？",
    "choices": [
      {
        "text": "影響を最小化し、通常運用へ早く戻す",
        "isCorrect": true,
        "explanation": "インシデント管理は早期復旧を重視します。"
      },
      {
        "text": "原因究明だけして復旧しない",
        "isCorrect": false,
        "explanation": "原因究明だけして復旧しないは正解ではありません。"
      },
      {
        "text": "連絡を受け付けない",
        "isCorrect": false,
        "explanation": "連絡を受け付けないは正解ではありません。"
      },
      {
        "text": "記録を残さない",
        "isCorrect": false,
        "explanation": "記録を残さないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "問題管理として最も適切なものは？",
    "choices": [
      {
        "text": "根本原因を分析し再発防止を行う",
        "isCorrect": true,
        "explanation": "問題管理は根本原因と再発防止に焦点を当てます。"
      },
      {
        "text": "同じ障害を放置する",
        "isCorrect": false,
        "explanation": "同じ障害を放置するは正解ではありません。"
      },
      {
        "text": "記録を消す",
        "isCorrect": false,
        "explanation": "記録を消すは正解ではありません。"
      },
      {
        "text": "暫定対応を禁止する",
        "isCorrect": false,
        "explanation": "暫定対応を禁止するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "容量管理として最も適切なものは？",
    "choices": [
      {
        "text": "利用量を監視し将来の必要容量を見積もる",
        "isCorrect": true,
        "explanation": "容量管理は安定運用に必要です。"
      },
      {
        "text": "容量不足を無視する",
        "isCorrect": false,
        "explanation": "容量不足を無視するは正解ではありません。"
      },
      {
        "text": "使用量を測らない",
        "isCorrect": false,
        "explanation": "使用量を測らないは正解ではありません。"
      },
      {
        "text": "不要なデータを無制限に増やす",
        "isCorrect": false,
        "explanation": "不要なデータを無制限に増やすは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "可用性管理として最も適切なものは？",
    "choices": [
      {
        "text": "停止時間を減らし必要な稼働率を満たすよう管理する",
        "isCorrect": true,
        "explanation": "可用性管理はサービス継続に関わります。"
      },
      {
        "text": "停止を増やす",
        "isCorrect": false,
        "explanation": "停止を増やすは正解ではありません。"
      },
      {
        "text": "復旧手順をなくす",
        "isCorrect": false,
        "explanation": "復旧手順をなくすは正解ではありません。"
      },
      {
        "text": "障害履歴を見ない",
        "isCorrect": false,
        "explanation": "障害履歴を見ないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "セキュリティポリシーとして最も適切なものは？",
    "choices": [
      {
        "text": "組織の情報セキュリティ方針とルールを定める",
        "isCorrect": true,
        "explanation": "ポリシーは組織全体の基準になります。"
      },
      {
        "text": "担当者だけが口頭で知る",
        "isCorrect": false,
        "explanation": "担当者だけが口頭で知るは正解ではありません。"
      },
      {
        "text": "事故時に初めて作る",
        "isCorrect": false,
        "explanation": "事故時に初めて作るは正解ではありません。"
      },
      {
        "text": "守らなくてもよいものにする",
        "isCorrect": false,
        "explanation": "守らなくてもよいものにするは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "監査証跡として最も適切なものは？",
    "choices": [
      {
        "text": "誰がいつ何をしたか追跡できる記録",
        "isCorrect": true,
        "explanation": "監査証跡は調査や説明責任に役立ちます。"
      },
      {
        "text": "記録を残さない運用",
        "isCorrect": false,
        "explanation": "記録を残さない運用は正解ではありません。"
      },
      {
        "text": "画面の背景画像",
        "isCorrect": false,
        "explanation": "画面の背景画像は正解ではありません。"
      },
      {
        "text": "通信ケーブルの色",
        "isCorrect": false,
        "explanation": "通信ケーブルの色は正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "二重化の目的として最も適切なものは？",
    "choices": [
      {
        "text": "障害時にもサービスを継続しやすくする",
        "isCorrect": true,
        "explanation": "二重化は可用性向上に使われます。"
      },
      {
        "text": "故障率を必ず上げる",
        "isCorrect": false,
        "explanation": "故障率を必ず上げるは正解ではありません。"
      },
      {
        "text": "データを消す",
        "isCorrect": false,
        "explanation": "データを消すは正解ではありません。"
      },
      {
        "text": "運用を不可能にする",
        "isCorrect": false,
        "explanation": "運用を不可能にするは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "負荷分散の目的として最も適切なものは？",
    "choices": [
      {
        "text": "複数の装置に処理を分散して性能や可用性を高める",
        "isCorrect": true,
        "explanation": "負荷分散はアクセス集中への対策です。"
      },
      {
        "text": "一台にすべて集中させる",
        "isCorrect": false,
        "explanation": "一台にすべて集中させるは正解ではありません。"
      },
      {
        "text": "通信を禁止する",
        "isCorrect": false,
        "explanation": "通信を禁止するは正解ではありません。"
      },
      {
        "text": "データを暗号化しない",
        "isCorrect": false,
        "explanation": "データを暗号化しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "キャッシュの利用目的として最も適切なものは？",
    "choices": [
      {
        "text": "よく使うデータを一時保存して処理を速くする",
        "isCorrect": true,
        "explanation": "キャッシュは応答速度向上に役立ちます。"
      },
      {
        "text": "データを必ず削除する",
        "isCorrect": false,
        "explanation": "データを必ず削除するは正解ではありません。"
      },
      {
        "text": "通信を常に遅くする",
        "isCorrect": false,
        "explanation": "通信を常に遅くするは正解ではありません。"
      },
      {
        "text": "画面を暗くする",
        "isCorrect": false,
        "explanation": "画面を暗くするは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "暗号鍵の管理として最も適切なものは？",
    "choices": [
      {
        "text": "鍵を安全に保管し、必要に応じて更新する",
        "isCorrect": true,
        "explanation": "暗号鍵は厳格な管理が必要です。"
      },
      {
        "text": "鍵を公開掲示板に載せる",
        "isCorrect": false,
        "explanation": "鍵を公開掲示板に載せるは正解ではありません。"
      },
      {
        "text": "全員で同じ鍵を無期限に使う",
        "isCorrect": false,
        "explanation": "全員で同じ鍵を無期限に使うは正解ではありません。"
      },
      {
        "text": "紛失しても報告しない",
        "isCorrect": false,
        "explanation": "紛失しても報告しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "委託開発の検収として最も適切なものは？",
    "choices": [
      {
        "text": "契約や仕様に基づき成果物を確認する",
        "isCorrect": true,
        "explanation": "検収では成果物が要求を満たすか確認します。"
      },
      {
        "text": "確認せず受け入れる",
        "isCorrect": false,
        "explanation": "確認せず受け入れるは正解ではありません。"
      },
      {
        "text": "仕様と無関係に判断する",
        "isCorrect": false,
        "explanation": "仕様と無関係に判断するは正解ではありません。"
      },
      {
        "text": "不具合を記録しない",
        "isCorrect": false,
        "explanation": "不具合を記録しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "システム移行で最も適切なものは？",
    "choices": [
      {
        "text": "移行手順、戻し手順、データ確認を準備する",
        "isCorrect": true,
        "explanation": "移行は事前準備と確認が重要です。"
      },
      {
        "text": "本番データを確認せず移行する",
        "isCorrect": false,
        "explanation": "本番データを確認せず移行するは正解ではありません。"
      },
      {
        "text": "戻し手順を用意しない",
        "isCorrect": false,
        "explanation": "戻し手順を用意しないは正解ではありません。"
      },
      {
        "text": "利用者へ知らせない",
        "isCorrect": false,
        "explanation": "利用者へ知らせないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "教育資料を作成する際に最も適切なものは？",
    "choices": [
      {
        "text": "対象者の知識レベルに合わせて内容を整理する",
        "isCorrect": true,
        "explanation": "教育資料は対象者に合わせる必要があります。"
      },
      {
        "text": "専門用語だけを並べる",
        "isCorrect": false,
        "explanation": "専門用語だけを並べるは正解ではありません。"
      },
      {
        "text": "目的を示さない",
        "isCorrect": false,
        "explanation": "目的を示さないは正解ではありません。"
      },
      {
        "text": "誤った手順を載せる",
        "isCorrect": false,
        "explanation": "誤った手順を載せるは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "問い合わせ対応の品質向上として最も適切なものは？",
    "choices": [
      {
        "text": "対応履歴を蓄積しFAQや手順を改善する",
        "isCorrect": true,
        "explanation": "履歴の活用により対応品質を高められます。"
      },
      {
        "text": "同じ質問に毎回別々に答える",
        "isCorrect": false,
        "explanation": "同じ質問に毎回別々に答えるは正解ではありません。"
      },
      {
        "text": "履歴を消す",
        "isCorrect": false,
        "explanation": "履歴を消すは正解ではありません。"
      },
      {
        "text": "利用者の声を無視する",
        "isCorrect": false,
        "explanation": "利用者の声を無視するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "情報システム投資の評価として最も適切なものは？",
    "choices": [
      {
        "text": "費用対効果やリスクを評価する",
        "isCorrect": true,
        "explanation": "投資判断では効果、費用、リスクを総合的に見ます。"
      },
      {
        "text": "導入費用だけを見て効果を無視する",
        "isCorrect": false,
        "explanation": "導入費用だけを見て効果を無視するは正解ではありません。"
      },
      {
        "text": "運用費を考えない",
        "isCorrect": false,
        "explanation": "運用費を考えないは正解ではありません。"
      },
      {
        "text": "利用者の負担を確認しない",
        "isCorrect": false,
        "explanation": "利用者の負担を確認しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "不正アクセス対策として最も適切なものは？",
    "choices": [
      {
        "text": "認証強化、アクセス制御、ログ監視を行う",
        "isCorrect": true,
        "explanation": "複数の対策を組み合わせることが有効です。"
      },
      {
        "text": "全ポートを無制限に公開する",
        "isCorrect": false,
        "explanation": "全ポートを無制限に公開するは正解ではありません。"
      },
      {
        "text": "パスワードを共有する",
        "isCorrect": false,
        "explanation": "パスワードを共有するは正解ではありません。"
      },
      {
        "text": "ログを保存しない",
        "isCorrect": false,
        "explanation": "ログを保存しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "データ持ち出しルールとして最も適切なものは？",
    "choices": [
      {
        "text": "承認、暗号化、持ち出し記録を行う",
        "isCorrect": true,
        "explanation": "持ち出しには管理手続きが必要です。"
      },
      {
        "text": "自由に持ち出す",
        "isCorrect": false,
        "explanation": "自由に持ち出すは正解ではありません。"
      },
      {
        "text": "記録を残さない",
        "isCorrect": false,
        "explanation": "記録を残さないは正解ではありません。"
      },
      {
        "text": "私物端末に無断保存する",
        "isCorrect": false,
        "explanation": "私物端末に無断保存するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "事業戦略とIT戦略の関係として最も適切なものは？",
    "choices": [
      {
        "text": "IT戦略は事業目標の達成を支えるように策定する",
        "isCorrect": true,
        "explanation": "ITは事業目標を支える手段として考えます。"
      },
      {
        "text": "IT戦略を事業と無関係に決める",
        "isCorrect": false,
        "explanation": "IT戦略を事業と無関係に決めるは正解ではありません。"
      },
      {
        "text": "事業目標を確認しない",
        "isCorrect": false,
        "explanation": "事業目標を確認しないは正解ではありません。"
      },
      {
        "text": "利用部門と話さない",
        "isCorrect": false,
        "explanation": "利用部門と話さないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "デジタルトランスフォーメーションの進め方として最も適切なものは？",
    "choices": [
      {
        "text": "デジタル技術で業務やビジネスモデルを変革する",
        "isCorrect": true,
        "explanation": "DXは業務や価値提供の変革を目指します。"
      },
      {
        "text": "紙をそのまま電子化するだけで終える",
        "isCorrect": false,
        "explanation": "紙をそのまま電子化するだけで終えるは正解ではありません。"
      },
      {
        "text": "現場課題を無視する",
        "isCorrect": false,
        "explanation": "現場課題を無視するは正解ではありません。"
      },
      {
        "text": "単に新しいPCを買うだけ",
        "isCorrect": false,
        "explanation": "単に新しいPCを買うだけは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "データバックアップの保存先として最も適切なものは？",
    "choices": [
      {
        "text": "元データと別の安全な場所にも保存する",
        "isCorrect": true,
        "explanation": "別媒体や別拠点への保存がリスク低減になります。"
      },
      {
        "text": "同じディスクの同じフォルダだけに置く",
        "isCorrect": false,
        "explanation": "同じディスクの同じフォルダだけに置くは正解ではありません。"
      },
      {
        "text": "取得後すぐ削除する",
        "isCorrect": false,
        "explanation": "取得後すぐ削除するは正解ではありません。"
      },
      {
        "text": "復元方法を記録しない",
        "isCorrect": false,
        "explanation": "復元方法を記録しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "パスワードリセットメールとして最も適切なものは？",
    "choices": [
      {
        "text": "有効期限付きの再設定リンクを送る",
        "isCorrect": true,
        "explanation": "平文パスワード送信は避け、期限付きリンクなどを使います。"
      },
      {
        "text": "現在のパスワードを平文で送る",
        "isCorrect": false,
        "explanation": "現在のパスワードを平文で送るは正解ではありません。"
      },
      {
        "text": "全員共通の新パスワードを送る",
        "isCorrect": false,
        "explanation": "全員共通の新パスワードを送るは正解ではありません。"
      },
      {
        "text": "本人確認を一切しない",
        "isCorrect": false,
        "explanation": "本人確認を一切しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "Webサイトの入力フォーム対策として最も適切なものは？",
    "choices": [
      {
        "text": "入力値の検証やエスケープ処理を行う",
        "isCorrect": true,
        "explanation": "入力検証は攻撃や誤入力への対策です。"
      },
      {
        "text": "入力をすべてSQLとして実行する",
        "isCorrect": false,
        "explanation": "入力をすべてSQLとして実行するは正解ではありません。"
      },
      {
        "text": "エラー内容を詳細に公開する",
        "isCorrect": false,
        "explanation": "エラー内容を詳細に公開するは正解ではありません。"
      },
      {
        "text": "認証なしで管理機能を出す",
        "isCorrect": false,
        "explanation": "認証なしで管理機能を出すは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "システムのログイン画面で最も適切なものは？",
    "choices": [
      {
        "text": "失敗回数制限や多要素認証を検討する",
        "isCorrect": true,
        "explanation": "ログイン画面は不正ログイン対策が重要です。"
      },
      {
        "text": "失敗回数を無制限にする",
        "isCorrect": false,
        "explanation": "失敗回数を無制限にするは正解ではありません。"
      },
      {
        "text": "パスワードを画面に表示する",
        "isCorrect": false,
        "explanation": "パスワードを画面に表示するは正解ではありません。"
      },
      {
        "text": "全員同じIDにする",
        "isCorrect": false,
        "explanation": "全員同じIDにするは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "ソーシャルエンジニアリング対策として最も適切なものは？",
    "choices": [
      {
        "text": "本人確認手順と教育を徹底する",
        "isCorrect": true,
        "explanation": "人をだます攻撃には手順と教育が有効です。"
      },
      {
        "text": "電話なら無条件で情報を教える",
        "isCorrect": false,
        "explanation": "電話なら無条件で情報を教えるは正解ではありません。"
      },
      {
        "text": "訪問者を確認しない",
        "isCorrect": false,
        "explanation": "訪問者を確認しないは正解ではありません。"
      },
      {
        "text": "IDカードを貸し借りする",
        "isCorrect": false,
        "explanation": "IDカードを貸し借りするは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "データの匿名加工として最も適切なものは？",
    "choices": [
      {
        "text": "個人を識別できないように加工する",
        "isCorrect": true,
        "explanation": "匿名加工では個人識別性を下げます。"
      },
      {
        "text": "氏名を残したまま公開する",
        "isCorrect": false,
        "explanation": "氏名を残したまま公開するは正解ではありません。"
      },
      {
        "text": "住所と電話番号をそのまま載せる",
        "isCorrect": false,
        "explanation": "住所と電話番号をそのまま載せるは正解ではありません。"
      },
      {
        "text": "復元できる対応表を公開する",
        "isCorrect": false,
        "explanation": "復元できる対応表を公開するは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "会計の固定費削減策として最も適切なものは？",
    "choices": [
      {
        "text": "不要な賃借料や保守契約を見直す",
        "isCorrect": true,
        "explanation": "固定費の見直しは利益改善に役立ちます。"
      },
      {
        "text": "材料費を必ず増やす",
        "isCorrect": false,
        "explanation": "材料費を必ず増やすは正解ではありません。"
      },
      {
        "text": "売上を減らす",
        "isCorrect": false,
        "explanation": "売上を減らすは正解ではありません。"
      },
      {
        "text": "仕入単価を上げる",
        "isCorrect": false,
        "explanation": "仕入単価を上げるは正解ではありません。"
      }
    ]
  },
  {
    "type": "最適問題",
    "question": "顧客満足度向上のために最も適切なものは？",
    "choices": [
      {
        "text": "顧客の声を収集し改善に反映する",
        "isCorrect": true,
        "explanation": "顧客の声を活用すると改善につながります。"
      },
      {
        "text": "苦情を記録しない",
        "isCorrect": false,
        "explanation": "苦情を記録しないは正解ではありません。"
      },
      {
        "text": "問い合わせを無視する",
        "isCorrect": false,
        "explanation": "問い合わせを無視するは正解ではありません。"
      },
      {
        "text": "使いにくさを放置する",
        "isCorrect": false,
        "explanation": "使いにくさを放置するは正解ではありません。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "HTTPSは通信内容を暗号化する仕組みを含む。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "HTTPSはHTTPにTLSなどの暗号化を組み合わせた通信です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "共通鍵暗号方式では、暗号化と復号に同じ鍵を使う。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "共通鍵暗号方式では同じ鍵を使います。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "公開鍵暗号方式では、公開鍵と秘密鍵の組を使う。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "公開鍵暗号方式では異なる鍵の組を使います。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "ファイアウォールは、通信の許可や遮断に使われる。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "ファイアウォールは通信制御に使います。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "フィッシングは、偽サイトなどで情報をだまし取る攻撃である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "フィッシングは偽装により認証情報などを盗む攻撃です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "ランサムウェアは、データを暗号化して身代金を要求することがある。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "ランサムウェアは金銭要求を伴うことがあります。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "二要素認証では、同じ種類のパスワードを二つ使えば十分である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": false,
        "explanation": "この文は誤りです。"
      },
      {
        "text": "正しくない",
        "isCorrect": true,
        "explanation": "二要素認証は異なる種類の認証要素を組み合わせます。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "バックアップは、復元できることを確認することも重要である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "復元確認をしないと障害時に使えない可能性があります。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "RPOは、復旧までに許容される時間を表す。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": false,
        "explanation": "この文は誤りです。"
      },
      {
        "text": "正しくない",
        "isCorrect": true,
        "explanation": "RPOは目標復旧時点で、時間はRTOです。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "RTOは、復旧までに許容される時間を表す。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "RTOは目標復旧時間です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "機密性は、許可された人だけが情報を利用できる性質である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "機密性は情報の秘密を守る性質です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "可用性は、必要なときに利用できる性質である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "可用性は利用可能性を示します。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "完全性は、情報が正確で改ざんされていない性質である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "完全性は情報の正確さを守ります。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "SQLは、リレーショナルデータベースの操作に使われる。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "SQLは検索や更新などに使われます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "主キーは、表の行を一意に識別するために使われる。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "主キーはレコードを一意に識別します。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "外部キーは、表同士の関連を表すために使われる。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "外部キーは関連する表とのつながりを示します。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "正規化は、データの重複や矛盾を減らすために行う。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "正規化はデータベース設計の基本です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "トランザクションでは、一連の処理を一つの単位として扱う。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "整合性を保つために一連の処理をまとめます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "排他制御は、同時更新による不整合を防ぐために使われる。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "排他制御は競合を防ぐ仕組みです。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "アルゴリズムは、問題を解くための手順である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "アルゴリズムは処理手順です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "フローチャートは、処理の流れを図で表す。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "フローチャートは処理手順の可視化に使います。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "APIは、ソフトウェア同士が機能を利用し合う接点である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "APIはプログラム連携に使われます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "単体テストは、複数システムを本番環境で同時に停止させる作業である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": false,
        "explanation": "この文は誤りです。"
      },
      {
        "text": "正しくない",
        "isCorrect": true,
        "explanation": "単体テストは個々のプログラム部品を確認するテストです。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "結合テストは、複数の部品を組み合わせて確認するテストである。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "結合テストでは連携部分を確認します。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "受入テストは、利用者の要求を満たすか確認するテストである。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "受入テストは利用者視点の確認です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "ウォータフォール開発では、工程を順番に進める。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "ウォータフォールは段階的に工程を進めます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "アジャイル開発では、短い反復で開発と改善を進める。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "アジャイルは反復型の開発です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "WBSは、作業を分解して整理するために使う。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "WBSは作業分解構成図です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "ガントチャートは、作業期間や進捗を表すために使う。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "ガントチャートはスケジュール管理に使います。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "クリティカルパス上の作業が遅れると、全体納期に影響することがある。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "クリティカルパスは納期に直結する経路です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "PDCAのCはCheckである。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "PDCAはPlan、Do、Check、Actです。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "PDCAのAはAnalyzeである。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": false,
        "explanation": "この文は誤りです。"
      },
      {
        "text": "正しくない",
        "isCorrect": true,
        "explanation": "PDCAのAはActです。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "KPIは、目標達成度を測るための指標である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "KPIは重要業績評価指標です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "KGIは、最終目標の達成度を示す指標である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "KGIは重要目標達成指標です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "BPRは、業務プロセスを抜本的に見直す考え方である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "BPRは業務改革を指します。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "ERPは、企業の基幹業務を統合的に管理する仕組みである。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "ERPは統合基幹業務システムです。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "CRMは、顧客との関係を管理する考え方や仕組みである。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "CRMは顧客関係管理です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "SCMは、供給連鎖を管理する考え方である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "SCMはサプライチェーン管理です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "IoTは、モノがインターネットにつながる仕組みである。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "IoTはInternet of Thingsです。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "AIは、人間の知的活動をコンピュータで実現しようとする技術である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "AIは人工知能です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "機械学習は、データから規則性を学習する技術である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "機械学習はAIの一分野です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "ビッグデータは、大量で多様なデータを指す。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "ビッグデータは量や種類などが大きいデータです。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "RPAは、定型的なPC作業の自動化に使われる。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "RPAはソフトウェアロボットによる自動化です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "個人情報は、特定の個人を識別できる情報である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "氏名や住所などが該当します。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "著作権は、原則として創作した時点で発生する。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "著作権は登録しなくても発生するのが基本です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "特許権は、発明を保護する権利である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "特許権は技術的な発明を保護します。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "商標権は、商品やサービスの識別標識を保護する権利である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "商標権はブランド名やロゴなどを保護します。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "固定費は、売上量に関係なく一定程度発生する費用である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "家賃などは固定費です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "変動費は、売上量や生産量に応じて増減する費用である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "材料費などは変動費です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "損益分岐点では、売上と費用が等しく利益がゼロになる。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "損益分岐点は利益が出始める境目です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "貸借対照表は、一定期間の収益と費用だけを示す表である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": false,
        "explanation": "この文は誤りです。"
      },
      {
        "text": "正しくない",
        "isCorrect": true,
        "explanation": "貸借対照表は一定時点の資産、負債、純資産を示します。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "損益計算書は、一定期間の収益、費用、利益を示す表である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "損益計算書は経営成績を表します。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "ROEは、自己資本に対する利益率である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "ROEは自己資本利益率です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "ROIは、投資に対する利益の割合である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "ROIは投資効果の指標です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "コンプライアンスは、法令や社会規範を守ることである。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "コンプライアンスは法令遵守などを指します。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "コーポレートガバナンスは、企業を適切に管理・監督する仕組みである。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "企業統治とも呼ばれます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "CSRは、企業の社会的責任を意味する。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "CSRはCorporate Social Responsibilityです。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "ステークホルダは、企業活動に関係する利害関係者である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "顧客、従業員、株主などが含まれます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "SWOT分析では、強み、弱み、機会、脅威を整理する。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "SWOTは内部・外部環境の整理に使います。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "3C分析では、顧客、自社、競合を分析する。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "3CはCustomer、Company、Competitorです。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "4Pには、Product、Price、Place、Promotionが含まれる。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "4Pはマーケティングミックスです。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "サブスクリプションは、一定期間ごとに料金を支払って利用する方式である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "継続課金型のサービス形態です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "アクセシビリティは、誰もが利用しやすいことに関係する。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "アクセシビリティは利用しやすさの配慮です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "ユーザビリティは、利用者にとっての使いやすさを意味する。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "ユーザビリティは操作性や理解しやすさです。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "ユニバーサルデザインは、できるだけ多くの人が使いやすい設計である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "多様な利用者を想定した設計です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "SaaSは、ソフトウェアをインターネット経由で利用する形態である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "SaaSはSoftware as a Serviceです。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "IaaSは、サーバやストレージなどの基盤をサービスとして利用する形態である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "IaaSはInfrastructure as a Serviceです。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "PaaSは、アプリケーション開発・実行基盤をサービスとして利用する形態である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "PaaSはPlatform as a Serviceです。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "クラウドサービスでは、インターネット経由で資源や機能を利用する。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "クラウドはネットワーク経由でサービスを利用します。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "DNSは、ドメイン名とIPアドレスを対応付ける仕組みである。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "DNSは名前解決に使われます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "IPアドレスは、ネットワーク上の機器を識別するために使われる。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "IPアドレスは通信相手の識別に使います。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "LANは、比較的狭い範囲のネットワークである。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "LANは家庭や社内などのネットワークです。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "WANは、離れた拠点間などを結ぶ広域ネットワークである。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "WANは広域ネットワークです。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "RAMは、電源を切っても必ず内容が保持される記憶装置である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": false,
        "explanation": "この文は誤りです。"
      },
      {
        "text": "正しくない",
        "isCorrect": true,
        "explanation": "RAMは一般に揮発性で、電源を切ると内容が消えます。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "ROMは、電源を切っても内容が保持される記憶装置である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "ROMは不揮発性の記憶装置です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "SSDは、半導体メモリを使った補助記憶装置である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "SSDは高速な補助記憶装置として使われます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "CPUは、コンピュータの演算や制御を行う装置である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "CPUは中央処理装置です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "OSは、ハードウェアやアプリケーションを管理する基本ソフトウェアである。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "OSは基本ソフトウェアです。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "ファイルの拡張子は、ファイルの種類を示す手がかりになる。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "拡張子はファイル形式の識別に使われます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "可逆圧縮では、圧縮前のデータに完全に戻せる。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "可逆圧縮は元データを完全に復元できます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "非可逆圧縮では、圧縮前のデータに完全に戻せない場合がある。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "画像や音声で容量削減に使われます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "デジタル署名は、改ざん検知や本人性確認に使われる。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "デジタル署名は信頼性確認に使います。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "ハッシュ値は、改ざん検知に使われることがある。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "ハッシュ値の変化で改ざんを検知できます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "ログは、障害調査や不正アクセス調査に役立つ。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "ログは追跡や分析に使われます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "最小権限の原則では、業務に必要な範囲だけ権限を与える。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "不要な権限を減らすことが安全です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "ソーシャルエンジニアリングは、技術ではなく人の心理を悪用する攻撃である。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "電話やなりすましなどで情報を得ようとします。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "インシデント発生時は、報告や記録をせずに証拠を消すのがよい。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": false,
        "explanation": "この文は誤りです。"
      },
      {
        "text": "正しくない",
        "isCorrect": true,
        "explanation": "報告、記録、証拠保全が重要です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "変更管理では、本番環境への変更内容や承認を記録する。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "変更管理は障害リスクを下げます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "構成管理では、機器やソフトウェアの構成情報を管理する。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "構成情報は運用や障害対応に必要です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "サービスデスクは、問い合わせや障害連絡の窓口となる。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "サービスデスクは利用者対応を担います。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "負荷分散は、処理を複数の装置に分散することである。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "負荷分散は性能や可用性向上に役立ちます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "キャッシュは、よく使うデータを一時保存して処理を速くするために使う。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "キャッシュは応答速度向上に使われます。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "HTTPSは通信内容を暗号化する仕組みを含む。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "HTTPSはHTTPにTLSなどの暗号化を組み合わせた通信です。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "共通鍵暗号方式では、暗号化と復号に同じ鍵を使う。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "共通鍵暗号方式では同じ鍵を使います。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "公開鍵暗号方式では、公開鍵と秘密鍵の組を使う。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "公開鍵暗号方式では異なる鍵の組を使います。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "正誤問題",
    "question": "ファイアウォールは、通信の許可や遮断に使われる。",
    "choices": [
      {
        "text": "正しい",
        "isCorrect": true,
        "explanation": "ファイアウォールは通信制御に使います。"
      },
      {
        "text": "正しくない",
        "isCorrect": false,
        "explanation": "この文は正しい内容です。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和6年",
    "question": "情報セキュリティの三要素として適切な組合せは？",
    "choices": [
      {
        "text": "機密性、完全性、可用性",
        "isCorrect": true,
        "explanation": "情報セキュリティの三要素は機密性、完全性、可用性です。"
      },
      {
        "text": "機密性、経済性、拡張性",
        "isCorrect": false,
        "explanation": "機密性、経済性、拡張性は正解ではありません。"
      },
      {
        "text": "可読性、移植性、収益性",
        "isCorrect": false,
        "explanation": "可読性、移植性、収益性は正解ではありません。"
      },
      {
        "text": "効率性、独自性、広告性",
        "isCorrect": false,
        "explanation": "効率性、独自性、広告性は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和5年",
    "question": "BCPの説明として適切なものは？",
    "choices": [
      {
        "text": "災害などでも重要業務を継続・復旧するための計画",
        "isCorrect": true,
        "explanation": "BCPは事業継続計画です。"
      },
      {
        "text": "販売価格を決定するための計画",
        "isCorrect": false,
        "explanation": "販売価格を決定するための計画は正解ではありません。"
      },
      {
        "text": "社員の評価点を計算する仕組み",
        "isCorrect": false,
        "explanation": "社員の評価点を計算する仕組みは正解ではありません。"
      },
      {
        "text": "Webページの色を決める手順",
        "isCorrect": false,
        "explanation": "Webページの色を決める手順は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和4年",
    "question": "RTOの説明として適切なものは？",
    "choices": [
      {
        "text": "復旧までに許容される目標時間",
        "isCorrect": true,
        "explanation": "RTOは目標復旧時間です。"
      },
      {
        "text": "復旧するデータ時点の目標",
        "isCorrect": false,
        "explanation": "復旧するデータ時点の目標は正解ではありません。"
      },
      {
        "text": "売上高利益率",
        "isCorrect": false,
        "explanation": "売上高利益率は正解ではありません。"
      },
      {
        "text": "通信パケットの大きさ",
        "isCorrect": false,
        "explanation": "通信パケットの大きさは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和3年",
    "question": "RPOの説明として適切なものは？",
    "choices": [
      {
        "text": "どの時点までのデータを復旧するかの目標",
        "isCorrect": true,
        "explanation": "RPOは目標復旧時点です。"
      },
      {
        "text": "復旧にかける時間の目標",
        "isCorrect": false,
        "explanation": "復旧にかける時間の目標は正解ではありません。"
      },
      {
        "text": "資産の回転率",
        "isCorrect": false,
        "explanation": "資産の回転率は正解ではありません。"
      },
      {
        "text": "プロジェクトの人数",
        "isCorrect": false,
        "explanation": "プロジェクトの人数は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和2年",
    "question": "ファイアウォールの目的として適切なものは？",
    "choices": [
      {
        "text": "ネットワーク通信を制御して不正アクセスを防ぐ",
        "isCorrect": true,
        "explanation": "ファイアウォールは通信制御に使います。"
      },
      {
        "text": "画面解像度を上げる",
        "isCorrect": false,
        "explanation": "画面解像度を上げるは正解ではありません。"
      },
      {
        "text": "売上を自動で計算する",
        "isCorrect": false,
        "explanation": "売上を自動で計算するは正解ではありません。"
      },
      {
        "text": "紙文書を分類する",
        "isCorrect": false,
        "explanation": "紙文書を分類するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成31年",
    "question": "フィッシング対策として適切なものは？",
    "choices": [
      {
        "text": "URLや送信元を確認し、不審な入力を避ける",
        "isCorrect": true,
        "explanation": "フィッシングでは偽装を見抜く確認が大切です。"
      },
      {
        "text": "偽サイトにIDを入力する",
        "isCorrect": false,
        "explanation": "偽サイトにIDを入力するは正解ではありません。"
      },
      {
        "text": "パスワードをメール返信する",
        "isCorrect": false,
        "explanation": "パスワードをメール返信するは正解ではありません。"
      },
      {
        "text": "警告を無視して進む",
        "isCorrect": false,
        "explanation": "警告を無視して進むは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成30年",
    "question": "公開鍵暗号方式の特徴として適切なものは？",
    "choices": [
      {
        "text": "公開鍵と秘密鍵を用いる",
        "isCorrect": true,
        "explanation": "公開鍵暗号方式では鍵のペアを使います。"
      },
      {
        "text": "暗号化と復号で必ず同じ鍵だけを使う",
        "isCorrect": false,
        "explanation": "暗号化と復号で必ず同じ鍵だけを使うは正解ではありません。"
      },
      {
        "text": "鍵を一切使わない",
        "isCorrect": false,
        "explanation": "鍵を一切使わないは正解ではありません。"
      },
      {
        "text": "紙文書だけに使う",
        "isCorrect": false,
        "explanation": "紙文書だけに使うは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成29年",
    "question": "ハッシュ値の利用目的として適切なものは？",
    "choices": [
      {
        "text": "データの改ざん検知",
        "isCorrect": true,
        "explanation": "ハッシュ値は改ざん検知などに使われます。"
      },
      {
        "text": "画面の明るさ調整",
        "isCorrect": false,
        "explanation": "画面の明るさ調整は正解ではありません。"
      },
      {
        "text": "通信料金の支払い",
        "isCorrect": false,
        "explanation": "通信料金の支払いは正解ではありません。"
      },
      {
        "text": "在庫棚の配置",
        "isCorrect": false,
        "explanation": "在庫棚の配置は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和6年",
    "question": "デジタル署名で確認できるものとして適切なものは？",
    "choices": [
      {
        "text": "作成者の本人性と改ざんの有無",
        "isCorrect": true,
        "explanation": "デジタル署名は本人性と改ざん検知に役立ちます。"
      },
      {
        "text": "印刷速度",
        "isCorrect": false,
        "explanation": "印刷速度は正解ではありません。"
      },
      {
        "text": "通信回線の長さ",
        "isCorrect": false,
        "explanation": "通信回線の長さは正解ではありません。"
      },
      {
        "text": "売上予測だけ",
        "isCorrect": false,
        "explanation": "売上予測だけは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和5年",
    "question": "最小権限の原則の説明として適切なものは？",
    "choices": [
      {
        "text": "業務に必要な最小限の権限だけを与える",
        "isCorrect": true,
        "explanation": "最小権限は被害範囲を小さくします。"
      },
      {
        "text": "全員に管理者権限を与える",
        "isCorrect": false,
        "explanation": "全員に管理者権限を与えるは正解ではありません。"
      },
      {
        "text": "権限を一切管理しない",
        "isCorrect": false,
        "explanation": "権限を一切管理しないは正解ではありません。"
      },
      {
        "text": "退職者の権限を残す",
        "isCorrect": false,
        "explanation": "退職者の権限を残すは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和4年",
    "question": "SQLの用途として適切なものは？",
    "choices": [
      {
        "text": "データベースの検索や更新",
        "isCorrect": true,
        "explanation": "SQLはデータベース操作に使います。"
      },
      {
        "text": "画像の印刷",
        "isCorrect": false,
        "explanation": "画像の印刷は正解ではありません。"
      },
      {
        "text": "電源供給",
        "isCorrect": false,
        "explanation": "電源供給は正解ではありません。"
      },
      {
        "text": "紙の裁断",
        "isCorrect": false,
        "explanation": "紙の裁断は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和3年",
    "question": "主キーの役割として適切なものは？",
    "choices": [
      {
        "text": "表の行を一意に識別する",
        "isCorrect": true,
        "explanation": "主キーはレコード識別に使います。"
      },
      {
        "text": "表の色を決める",
        "isCorrect": false,
        "explanation": "表の色を決めるは正解ではありません。"
      },
      {
        "text": "通信速度を測る",
        "isCorrect": false,
        "explanation": "通信速度を測るは正解ではありません。"
      },
      {
        "text": "紙を分類する",
        "isCorrect": false,
        "explanation": "紙を分類するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和2年",
    "question": "外部キーの役割として適切なものは？",
    "choices": [
      {
        "text": "他の表との関連を表す",
        "isCorrect": true,
        "explanation": "外部キーはリレーションを表します。"
      },
      {
        "text": "暗号鍵を公開する",
        "isCorrect": false,
        "explanation": "暗号鍵を公開するは正解ではありません。"
      },
      {
        "text": "プリンタを制御する",
        "isCorrect": false,
        "explanation": "プリンタを制御するは正解ではありません。"
      },
      {
        "text": "売上を隠す",
        "isCorrect": false,
        "explanation": "売上を隠すは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成31年",
    "question": "正規化の目的として適切なものは？",
    "choices": [
      {
        "text": "データの重複や更新時の矛盾を減らす",
        "isCorrect": true,
        "explanation": "正規化は不整合を抑える設計です。"
      },
      {
        "text": "画面を明るくする",
        "isCorrect": false,
        "explanation": "画面を明るくするは正解ではありません。"
      },
      {
        "text": "通信を遮断する",
        "isCorrect": false,
        "explanation": "通信を遮断するは正解ではありません。"
      },
      {
        "text": "会議時間を延ばす",
        "isCorrect": false,
        "explanation": "会議時間を延ばすは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成30年",
    "question": "トランザクション管理の目的として適切なものは？",
    "choices": [
      {
        "text": "一連の処理の整合性を保つ",
        "isCorrect": true,
        "explanation": "トランザクションは一貫性を守ります。"
      },
      {
        "text": "画像を高解像度にする",
        "isCorrect": false,
        "explanation": "画像を高解像度にするは正解ではありません。"
      },
      {
        "text": "文書を翻訳する",
        "isCorrect": false,
        "explanation": "文書を翻訳するは正解ではありません。"
      },
      {
        "text": "広告費を増やす",
        "isCorrect": false,
        "explanation": "広告費を増やすは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成29年",
    "question": "排他制御の説明として適切なものは？",
    "choices": [
      {
        "text": "同時更新による不整合を防ぐ",
        "isCorrect": true,
        "explanation": "排他制御は競合更新を制御します。"
      },
      {
        "text": "全員の通信を禁止する",
        "isCorrect": false,
        "explanation": "全員の通信を禁止するは正解ではありません。"
      },
      {
        "text": "画面を暗くする",
        "isCorrect": false,
        "explanation": "画面を暗くするは正解ではありません。"
      },
      {
        "text": "売上を増やす",
        "isCorrect": false,
        "explanation": "売上を増やすは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和6年",
    "question": "フローチャートで表すものとして適切なものは？",
    "choices": [
      {
        "text": "処理の流れ",
        "isCorrect": true,
        "explanation": "フローチャートは処理手順を図示します。"
      },
      {
        "text": "企業の資産だけ",
        "isCorrect": false,
        "explanation": "企業の資産だけは正解ではありません。"
      },
      {
        "text": "無線の電波強度だけ",
        "isCorrect": false,
        "explanation": "無線の電波強度だけは正解ではありません。"
      },
      {
        "text": "紙の厚さ",
        "isCorrect": false,
        "explanation": "紙の厚さは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和5年",
    "question": "配列の説明として適切なものは？",
    "choices": [
      {
        "text": "複数のデータを順序付きで扱う構造",
        "isCorrect": true,
        "explanation": "配列は複数データの管理に使います。"
      },
      {
        "text": "一つの紙文書だけ",
        "isCorrect": false,
        "explanation": "一つの紙文書だけは正解ではありません。"
      },
      {
        "text": "通信料金の単位",
        "isCorrect": false,
        "explanation": "通信料金の単位は正解ではありません。"
      },
      {
        "text": "画面の色設定",
        "isCorrect": false,
        "explanation": "画面の色設定は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和4年",
    "question": "APIの説明として適切なものは？",
    "choices": [
      {
        "text": "ソフトウェア同士が機能を利用し合うための接点",
        "isCorrect": true,
        "explanation": "APIはシステム連携に使われます。"
      },
      {
        "text": "紙の規格",
        "isCorrect": false,
        "explanation": "紙の規格は正解ではありません。"
      },
      {
        "text": "電源の周波数だけ",
        "isCorrect": false,
        "explanation": "電源の周波数だけは正解ではありません。"
      },
      {
        "text": "社員の勤務表",
        "isCorrect": false,
        "explanation": "社員の勤務表は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和3年",
    "question": "単体テストの対象として適切なものは？",
    "choices": [
      {
        "text": "個々のプログラム部品",
        "isCorrect": true,
        "explanation": "単体テストは部品単位で確認します。"
      },
      {
        "text": "全社の経営戦略",
        "isCorrect": false,
        "explanation": "全社の経営戦略は正解ではありません。"
      },
      {
        "text": "完成後の契約書だけ",
        "isCorrect": false,
        "explanation": "完成後の契約書だけは正解ではありません。"
      },
      {
        "text": "通信ケーブルの色",
        "isCorrect": false,
        "explanation": "通信ケーブルの色は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和2年",
    "question": "結合テストの目的として適切なものは？",
    "choices": [
      {
        "text": "複数機能の連携を確認する",
        "isCorrect": true,
        "explanation": "結合テストは接続部分を確認します。"
      },
      {
        "text": "社員の給与を決める",
        "isCorrect": false,
        "explanation": "社員の給与を決めるは正解ではありません。"
      },
      {
        "text": "紙を保管する",
        "isCorrect": false,
        "explanation": "紙を保管するは正解ではありません。"
      },
      {
        "text": "机を配置する",
        "isCorrect": false,
        "explanation": "机を配置するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成31年",
    "question": "受入テストの説明として適切なものは？",
    "choices": [
      {
        "text": "利用者要求を満たすか確認する",
        "isCorrect": true,
        "explanation": "受入テストは利用者視点で行います。"
      },
      {
        "text": "開発者の勤務時間を計算する",
        "isCorrect": false,
        "explanation": "開発者の勤務時間を計算するは正解ではありません。"
      },
      {
        "text": "サーバを廃棄する",
        "isCorrect": false,
        "explanation": "サーバを廃棄するは正解ではありません。"
      },
      {
        "text": "通信を遮断する",
        "isCorrect": false,
        "explanation": "通信を遮断するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成30年",
    "question": "ウォータフォールモデルの特徴として適切なものは？",
    "choices": [
      {
        "text": "工程を順番に進める",
        "isCorrect": true,
        "explanation": "ウォータフォールは段階的な開発モデルです。"
      },
      {
        "text": "短い反復だけで進める",
        "isCorrect": false,
        "explanation": "短い反復だけで進めるは正解ではありません。"
      },
      {
        "text": "計画を一切立てない",
        "isCorrect": false,
        "explanation": "計画を一切立てないは正解ではありません。"
      },
      {
        "text": "テストを禁止する",
        "isCorrect": false,
        "explanation": "テストを禁止するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成29年",
    "question": "アジャイル開発の特徴として適切なものは？",
    "choices": [
      {
        "text": "短い反復で開発と改善を行う",
        "isCorrect": true,
        "explanation": "アジャイルは変化に対応しながら進めます。"
      },
      {
        "text": "全工程を一度だけ行い変更しない",
        "isCorrect": false,
        "explanation": "全工程を一度だけ行い変更しないは正解ではありません。"
      },
      {
        "text": "設計を必ず省略する",
        "isCorrect": false,
        "explanation": "設計を必ず省略するは正解ではありません。"
      },
      {
        "text": "利用者の意見を聞かない",
        "isCorrect": false,
        "explanation": "利用者の意見を聞かないは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和6年",
    "question": "要件定義で行うこととして適切なものは？",
    "choices": [
      {
        "text": "必要な機能や条件を明確にする",
        "isCorrect": true,
        "explanation": "要件定義では要求を整理します。"
      },
      {
        "text": "完成後の廃棄だけを決める",
        "isCorrect": false,
        "explanation": "完成後の廃棄だけを決めるは正解ではありません。"
      },
      {
        "text": "紙の色だけを決める",
        "isCorrect": false,
        "explanation": "紙の色だけを決めるは正解ではありません。"
      },
      {
        "text": "通信回線を無断で切る",
        "isCorrect": false,
        "explanation": "通信回線を無断で切るは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和5年",
    "question": "WBSの説明として適切なものは？",
    "choices": [
      {
        "text": "プロジェクトの作業を階層的に分解したもの",
        "isCorrect": true,
        "explanation": "WBSは作業分解構成図です。"
      },
      {
        "text": "通信暗号化方式",
        "isCorrect": false,
        "explanation": "通信暗号化方式は正解ではありません。"
      },
      {
        "text": "会計伝票の一覧",
        "isCorrect": false,
        "explanation": "会計伝票の一覧は正解ではありません。"
      },
      {
        "text": "画像の圧縮率",
        "isCorrect": false,
        "explanation": "画像の圧縮率は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和4年",
    "question": "ガントチャートの用途として適切なものは？",
    "choices": [
      {
        "text": "作業期間や進捗の管理",
        "isCorrect": true,
        "explanation": "ガントチャートはスケジュールを見える化します。"
      },
      {
        "text": "暗号鍵の生成",
        "isCorrect": false,
        "explanation": "暗号鍵の生成は正解ではありません。"
      },
      {
        "text": "データベースの正規化だけ",
        "isCorrect": false,
        "explanation": "データベースの正規化だけは正解ではありません。"
      },
      {
        "text": "紙の裁断",
        "isCorrect": false,
        "explanation": "紙の裁断は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和3年",
    "question": "クリティカルパスの説明として適切なものは？",
    "choices": [
      {
        "text": "遅れると全体納期に影響する経路",
        "isCorrect": true,
        "explanation": "クリティカルパスは納期管理の重要経路です。"
      },
      {
        "text": "最も費用が安い経路",
        "isCorrect": false,
        "explanation": "最も費用が安い経路は正解ではありません。"
      },
      {
        "text": "最も短いファイル名",
        "isCorrect": false,
        "explanation": "最も短いファイル名は正解ではありません。"
      },
      {
        "text": "最も明るい画面",
        "isCorrect": false,
        "explanation": "最も明るい画面は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和2年",
    "question": "リスク管理で行うこととして適切なものは？",
    "choices": [
      {
        "text": "発生確率と影響を評価して対策する",
        "isCorrect": true,
        "explanation": "リスク管理では評価と対応策を考えます。"
      },
      {
        "text": "リスクをすべて無視する",
        "isCorrect": false,
        "explanation": "リスクをすべて無視するは正解ではありません。"
      },
      {
        "text": "記録を一切残さない",
        "isCorrect": false,
        "explanation": "記録を一切残さないは正解ではありません。"
      },
      {
        "text": "担当者を決めない",
        "isCorrect": false,
        "explanation": "担当者を決めないは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成31年",
    "question": "PDCAサイクルの順序として適切なものは？",
    "choices": [
      {
        "text": "Plan、Do、Check、Act",
        "isCorrect": true,
        "explanation": "PDCAは計画、実行、評価、改善のサイクルです。"
      },
      {
        "text": "Plan、Data、Cloud、API",
        "isCorrect": false,
        "explanation": "Plan、Data、Cloud、APIは正解ではありません。"
      },
      {
        "text": "Price、Design、Cost、Access",
        "isCorrect": false,
        "explanation": "Price、Design、Cost、Accessは正解ではありません。"
      },
      {
        "text": "Print、Delete、Copy、Add",
        "isCorrect": false,
        "explanation": "Print、Delete、Copy、Addは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成30年",
    "question": "KPIの説明として適切なものは？",
    "choices": [
      {
        "text": "目標達成度を測る重要業績評価指標",
        "isCorrect": true,
        "explanation": "KPIは業務目標の進捗管理に使います。"
      },
      {
        "text": "暗号鍵の長さ",
        "isCorrect": false,
        "explanation": "暗号鍵の長さは正解ではありません。"
      },
      {
        "text": "プリンタの解像度",
        "isCorrect": false,
        "explanation": "プリンタの解像度は正解ではありません。"
      },
      {
        "text": "通信ケーブルの種類",
        "isCorrect": false,
        "explanation": "通信ケーブルの種類は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成29年",
    "question": "KGIの説明として適切なものは？",
    "choices": [
      {
        "text": "最終目標の達成度を示す指標",
        "isCorrect": true,
        "explanation": "KGIは最終的なゴールを示します。"
      },
      {
        "text": "一時的な作業メモ",
        "isCorrect": false,
        "explanation": "一時的な作業メモは正解ではありません。"
      },
      {
        "text": "画面の色",
        "isCorrect": false,
        "explanation": "画面の色は正解ではありません。"
      },
      {
        "text": "ファイルの拡張子",
        "isCorrect": false,
        "explanation": "ファイルの拡張子は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和6年",
    "question": "BPRの目的として適切なものは？",
    "choices": [
      {
        "text": "業務プロセスを抜本的に見直す",
        "isCorrect": true,
        "explanation": "BPRは業務改革です。"
      },
      {
        "text": "通信速度だけを測る",
        "isCorrect": false,
        "explanation": "通信速度だけを測るは正解ではありません。"
      },
      {
        "text": "紙の色を変える",
        "isCorrect": false,
        "explanation": "紙の色を変えるは正解ではありません。"
      },
      {
        "text": "PCを再起動する",
        "isCorrect": false,
        "explanation": "PCを再起動するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和5年",
    "question": "ERPの説明として適切なものは？",
    "choices": [
      {
        "text": "企業の基幹業務を統合的に管理する仕組み",
        "isCorrect": true,
        "explanation": "ERPは基幹業務を統合します。"
      },
      {
        "text": "個人用の画像編集機能",
        "isCorrect": false,
        "explanation": "個人用の画像編集機能は正解ではありません。"
      },
      {
        "text": "暗号化だけを行う装置",
        "isCorrect": false,
        "explanation": "暗号化だけを行う装置は正解ではありません。"
      },
      {
        "text": "紙の大きさ",
        "isCorrect": false,
        "explanation": "紙の大きさは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和4年",
    "question": "CRMの目的として適切なものは？",
    "choices": [
      {
        "text": "顧客情報や対応履歴を活用し関係を強化する",
        "isCorrect": true,
        "explanation": "CRMは顧客関係管理です。"
      },
      {
        "text": "CPUを冷却する",
        "isCorrect": false,
        "explanation": "CPUを冷却するは正解ではありません。"
      },
      {
        "text": "紙を印刷する",
        "isCorrect": false,
        "explanation": "紙を印刷するは正解ではありません。"
      },
      {
        "text": "通信を遮断する",
        "isCorrect": false,
        "explanation": "通信を遮断するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和3年",
    "question": "SCMの目的として適切なものは？",
    "choices": [
      {
        "text": "調達から販売までの供給連鎖を最適化する",
        "isCorrect": true,
        "explanation": "SCMはサプライチェーン管理です。"
      },
      {
        "text": "社員の休暇だけを管理する",
        "isCorrect": false,
        "explanation": "社員の休暇だけを管理するは正解ではありません。"
      },
      {
        "text": "画像を圧縮する",
        "isCorrect": false,
        "explanation": "画像を圧縮するは正解ではありません。"
      },
      {
        "text": "会議室を清掃する",
        "isCorrect": false,
        "explanation": "会議室を清掃するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和2年",
    "question": "IoTの説明として適切なものは？",
    "choices": [
      {
        "text": "モノがインターネットにつながりデータをやり取りする仕組み",
        "isCorrect": true,
        "explanation": "IoTはモノのインターネットです。"
      },
      {
        "text": "紙だけで行う処理",
        "isCorrect": false,
        "explanation": "紙だけで行う処理は正解ではありません。"
      },
      {
        "text": "電源の種類",
        "isCorrect": false,
        "explanation": "電源の種類は正解ではありません。"
      },
      {
        "text": "売上表の罫線",
        "isCorrect": false,
        "explanation": "売上表の罫線は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成31年",
    "question": "AIの活用例として適切なものは？",
    "choices": [
      {
        "text": "需要予測や画像認識",
        "isCorrect": true,
        "explanation": "AIは予測や認識などに活用されます。"
      },
      {
        "text": "紙の厚さ測定だけ",
        "isCorrect": false,
        "explanation": "紙の厚さ測定だけは正解ではありません。"
      },
      {
        "text": "通信ケーブルの色選びだけ",
        "isCorrect": false,
        "explanation": "通信ケーブルの色選びだけは正解ではありません。"
      },
      {
        "text": "電源プラグの形状変更だけ",
        "isCorrect": false,
        "explanation": "電源プラグの形状変更だけは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成30年",
    "question": "機械学習の説明として適切なものは？",
    "choices": [
      {
        "text": "データから規則性を学習して判断や予測に使う",
        "isCorrect": true,
        "explanation": "機械学習はデータに基づく学習です。"
      },
      {
        "text": "必ず人が手で全ての規則を書く",
        "isCorrect": false,
        "explanation": "必ず人が手で全ての規則を書くは正解ではありません。"
      },
      {
        "text": "紙を印刷する",
        "isCorrect": false,
        "explanation": "紙を印刷するは正解ではありません。"
      },
      {
        "text": "電源を切る",
        "isCorrect": false,
        "explanation": "電源を切るは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成29年",
    "question": "ビッグデータ活用の目的として適切なものは？",
    "choices": [
      {
        "text": "大量データから傾向や知見を得る",
        "isCorrect": true,
        "explanation": "ビッグデータは分析や改善に使われます。"
      },
      {
        "text": "データをすべて捨てる",
        "isCorrect": false,
        "explanation": "データをすべて捨てるは正解ではありません。"
      },
      {
        "text": "紙の色を変える",
        "isCorrect": false,
        "explanation": "紙の色を変えるは正解ではありません。"
      },
      {
        "text": "通信を止める",
        "isCorrect": false,
        "explanation": "通信を止めるは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和6年",
    "question": "RPAに適した業務として適切なものは？",
    "choices": [
      {
        "text": "定型的で繰り返しの入力作業",
        "isCorrect": true,
        "explanation": "RPAは定型作業に向いています。"
      },
      {
        "text": "毎回高度な判断が必要な経営判断",
        "isCorrect": false,
        "explanation": "毎回高度な判断が必要な経営判断は正解ではありません。"
      },
      {
        "text": "創造的な企画だけ",
        "isCorrect": false,
        "explanation": "創造的な企画だけは正解ではありません。"
      },
      {
        "text": "例外ばかりで手順化できない作業",
        "isCorrect": false,
        "explanation": "例外ばかりで手順化できない作業は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和5年",
    "question": "個人情報保護で適切な対応は？",
    "choices": [
      {
        "text": "利用目的を明確にし必要な範囲で扱う",
        "isCorrect": true,
        "explanation": "個人情報は目的と安全管理が重要です。"
      },
      {
        "text": "目的を知らせず大量収集する",
        "isCorrect": false,
        "explanation": "目的を知らせず大量収集するは正解ではありません。"
      },
      {
        "text": "誰でも見られる場所に置く",
        "isCorrect": false,
        "explanation": "誰でも見られる場所に置くは正解ではありません。"
      },
      {
        "text": "不要後も放置する",
        "isCorrect": false,
        "explanation": "不要後も放置するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和4年",
    "question": "著作権の説明として適切なものは？",
    "choices": [
      {
        "text": "著作物を創作した時点で原則として発生する権利",
        "isCorrect": true,
        "explanation": "著作権は原則として創作時に発生します。"
      },
      {
        "text": "必ず登録しなければ発生しない権利",
        "isCorrect": false,
        "explanation": "必ず登録しなければ発生しない権利は正解ではありません。"
      },
      {
        "text": "通信速度の権利",
        "isCorrect": false,
        "explanation": "通信速度の権利は正解ではありません。"
      },
      {
        "text": "会計処理の権利",
        "isCorrect": false,
        "explanation": "会計処理の権利は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和3年",
    "question": "特許権の対象として適切なものは？",
    "choices": [
      {
        "text": "技術的な発明",
        "isCorrect": true,
        "explanation": "特許権は発明を保護します。"
      },
      {
        "text": "単なる会社の住所",
        "isCorrect": false,
        "explanation": "単なる会社の住所は正解ではありません。"
      },
      {
        "text": "一般的な天気情報",
        "isCorrect": false,
        "explanation": "一般的な天気情報は正解ではありません。"
      },
      {
        "text": "会議室の予約",
        "isCorrect": false,
        "explanation": "会議室の予約は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和2年",
    "question": "商標権の対象として適切なものは？",
    "choices": [
      {
        "text": "商品やサービスを識別する名称やロゴ",
        "isCorrect": true,
        "explanation": "商標権はブランド識別標識を保護します。"
      },
      {
        "text": "通信回線の長さ",
        "isCorrect": false,
        "explanation": "通信回線の長さは正解ではありません。"
      },
      {
        "text": "会計年度",
        "isCorrect": false,
        "explanation": "会計年度は正解ではありません。"
      },
      {
        "text": "CPU温度",
        "isCorrect": false,
        "explanation": "CPU温度は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成31年",
    "question": "固定費の例として適切なものは？",
    "choices": [
      {
        "text": "売上に関係なく発生する家賃",
        "isCorrect": true,
        "explanation": "家賃は固定費の代表例です。"
      },
      {
        "text": "商品1個ごとに増える材料費",
        "isCorrect": false,
        "explanation": "商品1個ごとに増える材料費は正解ではありません。"
      },
      {
        "text": "販売数量に比例する仕入原価",
        "isCorrect": false,
        "explanation": "販売数量に比例する仕入原価は正解ではありません。"
      },
      {
        "text": "配送1件ごとに増える送料だけ",
        "isCorrect": false,
        "explanation": "配送1件ごとに増える送料だけは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成30年",
    "question": "変動費の例として適切なものは？",
    "choices": [
      {
        "text": "販売量に応じて増える材料費",
        "isCorrect": true,
        "explanation": "材料費は販売量や生産量に応じて増えます。"
      },
      {
        "text": "毎月一定の事務所家賃",
        "isCorrect": false,
        "explanation": "毎月一定の事務所家賃は正解ではありません。"
      },
      {
        "text": "固定の保険料",
        "isCorrect": false,
        "explanation": "固定の保険料は正解ではありません。"
      },
      {
        "text": "通信の基本料金だけ",
        "isCorrect": false,
        "explanation": "通信の基本料金だけは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成29年",
    "question": "損益分岐点売上高が下がる要因として適切なものは？",
    "choices": [
      {
        "text": "固定費の削減",
        "isCorrect": true,
        "explanation": "固定費が下がると損益分岐点売上高も下がります。"
      },
      {
        "text": "固定費の増加",
        "isCorrect": false,
        "explanation": "固定費の増加は正解ではありません。"
      },
      {
        "text": "限界利益率の低下",
        "isCorrect": false,
        "explanation": "限界利益率の低下は正解ではありません。"
      },
      {
        "text": "変動費率の上昇",
        "isCorrect": false,
        "explanation": "変動費率の上昇は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和6年",
    "question": "貸借対照表に表示されるものとして適切なものは？",
    "choices": [
      {
        "text": "資産、負債、純資産",
        "isCorrect": true,
        "explanation": "貸借対照表は財政状態を示します。"
      },
      {
        "text": "収益、費用、利益だけ",
        "isCorrect": false,
        "explanation": "収益、費用、利益だけは正解ではありません。"
      },
      {
        "text": "作業日程だけ",
        "isCorrect": false,
        "explanation": "作業日程だけは正解ではありません。"
      },
      {
        "text": "通信ログだけ",
        "isCorrect": false,
        "explanation": "通信ログだけは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和5年",
    "question": "損益計算書に表示されるものとして適切なものは？",
    "choices": [
      {
        "text": "収益、費用、利益",
        "isCorrect": true,
        "explanation": "損益計算書は経営成績を示します。"
      },
      {
        "text": "資産、負債、純資産だけ",
        "isCorrect": false,
        "explanation": "資産、負債、純資産だけは正解ではありません。"
      },
      {
        "text": "WBSだけ",
        "isCorrect": false,
        "explanation": "WBSだけは正解ではありません。"
      },
      {
        "text": "IPアドレスだけ",
        "isCorrect": false,
        "explanation": "IPアドレスだけは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和4年",
    "question": "ROEの説明として適切なものは？",
    "choices": [
      {
        "text": "自己資本に対する利益率",
        "isCorrect": true,
        "explanation": "ROEは自己資本利益率です。"
      },
      {
        "text": "売上に対する広告費だけ",
        "isCorrect": false,
        "explanation": "売上に対する広告費だけは正解ではありません。"
      },
      {
        "text": "通信速度の単位",
        "isCorrect": false,
        "explanation": "通信速度の単位は正解ではありません。"
      },
      {
        "text": "在庫数量",
        "isCorrect": false,
        "explanation": "在庫数量は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和3年",
    "question": "ROIの説明として適切なものは？",
    "choices": [
      {
        "text": "投資額に対する利益の割合",
        "isCorrect": true,
        "explanation": "ROIは投資効果の指標です。"
      },
      {
        "text": "CPU使用率",
        "isCorrect": false,
        "explanation": "CPU使用率は正解ではありません。"
      },
      {
        "text": "紙の厚さ",
        "isCorrect": false,
        "explanation": "紙の厚さは正解ではありません。"
      },
      {
        "text": "ファイル拡張子",
        "isCorrect": false,
        "explanation": "ファイル拡張子は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和2年",
    "question": "コンプライアンスの説明として適切なものは？",
    "choices": [
      {
        "text": "法令や社会規範を守ること",
        "isCorrect": true,
        "explanation": "コンプライアンスは企業活動の基本です。"
      },
      {
        "text": "通信速度を上げること",
        "isCorrect": false,
        "explanation": "通信速度を上げることは正解ではありません。"
      },
      {
        "text": "画面を暗くすること",
        "isCorrect": false,
        "explanation": "画面を暗くすることは正解ではありません。"
      },
      {
        "text": "紙を増やすこと",
        "isCorrect": false,
        "explanation": "紙を増やすことは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成31年",
    "question": "コーポレートガバナンスの目的として適切なものは？",
    "choices": [
      {
        "text": "企業経営を適切に管理・監督する",
        "isCorrect": true,
        "explanation": "コーポレートガバナンスは企業統治です。"
      },
      {
        "text": "通信を暗号化するだけ",
        "isCorrect": false,
        "explanation": "通信を暗号化するだけは正解ではありません。"
      },
      {
        "text": "画面を印刷するだけ",
        "isCorrect": false,
        "explanation": "画面を印刷するだけは正解ではありません。"
      },
      {
        "text": "紙を分類するだけ",
        "isCorrect": false,
        "explanation": "紙を分類するだけは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成30年",
    "question": "CSRの説明として適切なものは？",
    "choices": [
      {
        "text": "企業の社会的責任",
        "isCorrect": true,
        "explanation": "CSRは社会や環境への責任ある活動を指します。"
      },
      {
        "text": "CPUの性能指標",
        "isCorrect": false,
        "explanation": "CPUの性能指標は正解ではありません。"
      },
      {
        "text": "通信ケーブルの規格",
        "isCorrect": false,
        "explanation": "通信ケーブルの規格は正解ではありません。"
      },
      {
        "text": "紙のサイズ",
        "isCorrect": false,
        "explanation": "紙のサイズは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成29年",
    "question": "ステークホルダとして適切なものは？",
    "choices": [
      {
        "text": "顧客、従業員、株主、取引先など",
        "isCorrect": true,
        "explanation": "ステークホルダは利害関係者です。"
      },
      {
        "text": "CPU、RAM、ROMだけ",
        "isCorrect": false,
        "explanation": "CPU、RAM、ROMだけは正解ではありません。"
      },
      {
        "text": "紙、鉛筆、机だけ",
        "isCorrect": false,
        "explanation": "紙、鉛筆、机だけは正解ではありません。"
      },
      {
        "text": "画像、音声、動画だけ",
        "isCorrect": false,
        "explanation": "画像、音声、動画だけは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和6年",
    "question": "SWOT分析のOに当たるものは？",
    "choices": [
      {
        "text": "機会",
        "isCorrect": true,
        "explanation": "SWOTのOはOpportunityで機会です。"
      },
      {
        "text": "強み",
        "isCorrect": false,
        "explanation": "強みは正解ではありません。"
      },
      {
        "text": "弱み",
        "isCorrect": false,
        "explanation": "弱みは正解ではありません。"
      },
      {
        "text": "脅威",
        "isCorrect": false,
        "explanation": "脅威は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和5年",
    "question": "SWOT分析のTに当たるものは？",
    "choices": [
      {
        "text": "脅威",
        "isCorrect": true,
        "explanation": "SWOTのTはThreatで脅威です。"
      },
      {
        "text": "強み",
        "isCorrect": false,
        "explanation": "強みは正解ではありません。"
      },
      {
        "text": "弱み",
        "isCorrect": false,
        "explanation": "弱みは正解ではありません。"
      },
      {
        "text": "機会",
        "isCorrect": false,
        "explanation": "機会は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和4年",
    "question": "3C分析に含まれるものは？",
    "choices": [
      {
        "text": "顧客、自社、競合",
        "isCorrect": true,
        "explanation": "3CはCustomer、Company、Competitorです。"
      },
      {
        "text": "価格、場所、広告",
        "isCorrect": false,
        "explanation": "価格、場所、広告は正解ではありません。"
      },
      {
        "text": "CPU、RAM、SSD",
        "isCorrect": false,
        "explanation": "CPU、RAM、SSDは正解ではありません。"
      },
      {
        "text": "計画、実行、評価",
        "isCorrect": false,
        "explanation": "計画、実行、評価は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和3年",
    "question": "4PのPromotionに該当するものは？",
    "choices": [
      {
        "text": "広告宣伝や販売促進",
        "isCorrect": true,
        "explanation": "Promotionは販売促進です。"
      },
      {
        "text": "商品の保管場所だけ",
        "isCorrect": false,
        "explanation": "商品の保管場所だけは正解ではありません。"
      },
      {
        "text": "製造原価だけ",
        "isCorrect": false,
        "explanation": "製造原価だけは正解ではありません。"
      },
      {
        "text": "社員評価だけ",
        "isCorrect": false,
        "explanation": "社員評価だけは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和2年",
    "question": "サブスクリプションモデルの特徴として適切なものは？",
    "choices": [
      {
        "text": "継続的に料金を支払い利用する",
        "isCorrect": true,
        "explanation": "サブスクリプションは継続課金型です。"
      },
      {
        "text": "一度購入すれば必ず永久無料",
        "isCorrect": false,
        "explanation": "一度購入すれば必ず永久無料は正解ではありません。"
      },
      {
        "text": "現金のみで単発購入",
        "isCorrect": false,
        "explanation": "現金のみで単発購入は正解ではありません。"
      },
      {
        "text": "通信を禁止する",
        "isCorrect": false,
        "explanation": "通信を禁止するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成31年",
    "question": "ロングテールの説明として適切なものは？",
    "choices": [
      {
        "text": "少量販売の商品群の合計が大きな売上になること",
        "isCorrect": true,
        "explanation": "ロングテールはネット販売などで見られます。"
      },
      {
        "text": "売れ筋商品だけを扱うこと",
        "isCorrect": false,
        "explanation": "売れ筋商品だけを扱うことは正解ではありません。"
      },
      {
        "text": "在庫を必ずゼロにすること",
        "isCorrect": false,
        "explanation": "在庫を必ずゼロにすることは正解ではありません。"
      },
      {
        "text": "全商品を同じ価格にすること",
        "isCorrect": false,
        "explanation": "全商品を同じ価格にすることは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成30年",
    "question": "オムニチャネルの説明として適切なものは？",
    "choices": [
      {
        "text": "店舗、EC、アプリなど複数接点を連携すること",
        "isCorrect": true,
        "explanation": "オムニチャネルは複数チャネル連携です。"
      },
      {
        "text": "店舗だけを使うこと",
        "isCorrect": false,
        "explanation": "店舗だけを使うことは正解ではありません。"
      },
      {
        "text": "通信を遮断すること",
        "isCorrect": false,
        "explanation": "通信を遮断することは正解ではありません。"
      },
      {
        "text": "会計処理を禁止すること",
        "isCorrect": false,
        "explanation": "会計処理を禁止することは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成29年",
    "question": "アクセシビリティ向上の例として適切なものは？",
    "choices": [
      {
        "text": "画像に代替テキストを付ける",
        "isCorrect": true,
        "explanation": "代替テキストは視覚情報の補助になります。"
      },
      {
        "text": "文字を極端に小さくする",
        "isCorrect": false,
        "explanation": "文字を極端に小さくするは正解ではありません。"
      },
      {
        "text": "色だけで情報を伝える",
        "isCorrect": false,
        "explanation": "色だけで情報を伝えるは正解ではありません。"
      },
      {
        "text": "キーボード操作を禁止する",
        "isCorrect": false,
        "explanation": "キーボード操作を禁止するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和6年",
    "question": "ユーザビリティ向上の例として適切なものは？",
    "choices": [
      {
        "text": "利用者が迷わず操作できる画面にする",
        "isCorrect": true,
        "explanation": "ユーザビリティは使いやすさです。"
      },
      {
        "text": "必要なボタンを隠す",
        "isCorrect": false,
        "explanation": "必要なボタンを隠すは正解ではありません。"
      },
      {
        "text": "エラー理由を示さない",
        "isCorrect": false,
        "explanation": "エラー理由を示さないは正解ではありません。"
      },
      {
        "text": "操作手順を複雑にする",
        "isCorrect": false,
        "explanation": "操作手順を複雑にするは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和5年",
    "question": "SaaSの例として適切なものは？",
    "choices": [
      {
        "text": "Webブラウザから利用する業務アプリケーション",
        "isCorrect": true,
        "explanation": "SaaSはソフトウェアをサービスとして利用します。"
      },
      {
        "text": "自社で購入した物理サーバだけ",
        "isCorrect": false,
        "explanation": "自社で購入した物理サーバだけは正解ではありません。"
      },
      {
        "text": "紙の帳票だけ",
        "isCorrect": false,
        "explanation": "紙の帳票だけは正解ではありません。"
      },
      {
        "text": "電源ケーブル",
        "isCorrect": false,
        "explanation": "電源ケーブルは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和4年",
    "question": "PaaSの説明として適切なものは？",
    "choices": [
      {
        "text": "アプリケーション開発・実行環境を提供するサービス",
        "isCorrect": true,
        "explanation": "PaaSはプラットフォームの提供です。"
      },
      {
        "text": "完成済みアプリだけの利用",
        "isCorrect": false,
        "explanation": "完成済みアプリだけの利用は正解ではありません。"
      },
      {
        "text": "通信ケーブルの販売",
        "isCorrect": false,
        "explanation": "通信ケーブルの販売は正解ではありません。"
      },
      {
        "text": "紙文書の配送",
        "isCorrect": false,
        "explanation": "紙文書の配送は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和3年",
    "question": "IaaSの説明として適切なものは？",
    "choices": [
      {
        "text": "仮想サーバやストレージなどの基盤を提供するサービス",
        "isCorrect": true,
        "explanation": "IaaSはインフラ提供です。"
      },
      {
        "text": "文章作成アプリだけの利用",
        "isCorrect": false,
        "explanation": "文章作成アプリだけの利用は正解ではありません。"
      },
      {
        "text": "会計伝票の印刷",
        "isCorrect": false,
        "explanation": "会計伝票の印刷は正解ではありません。"
      },
      {
        "text": "紙の保管",
        "isCorrect": false,
        "explanation": "紙の保管は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和2年",
    "question": "DNSの役割として適切なものは？",
    "choices": [
      {
        "text": "ドメイン名からIPアドレスを調べる",
        "isCorrect": true,
        "explanation": "DNSは名前解決に使われます。"
      },
      {
        "text": "画像を圧縮する",
        "isCorrect": false,
        "explanation": "画像を圧縮するは正解ではありません。"
      },
      {
        "text": "紙を印刷する",
        "isCorrect": false,
        "explanation": "紙を印刷するは正解ではありません。"
      },
      {
        "text": "売上を計算する",
        "isCorrect": false,
        "explanation": "売上を計算するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成31年",
    "question": "IPアドレスの役割として適切なものは？",
    "choices": [
      {
        "text": "ネットワーク上の機器を識別する",
        "isCorrect": true,
        "explanation": "IPアドレスは通信相手の識別に使います。"
      },
      {
        "text": "画像の色を表す",
        "isCorrect": false,
        "explanation": "画像の色を表すは正解ではありません。"
      },
      {
        "text": "会計上の利益を示す",
        "isCorrect": false,
        "explanation": "会計上の利益を示すは正解ではありません。"
      },
      {
        "text": "紙の厚さを表す",
        "isCorrect": false,
        "explanation": "紙の厚さを表すは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成30年",
    "question": "HTTPSの特徴として適切なものは？",
    "choices": [
      {
        "text": "通信を暗号化して安全性を高める",
        "isCorrect": true,
        "explanation": "HTTPSはWeb通信を暗号化します。"
      },
      {
        "text": "通信を必ず平文にする",
        "isCorrect": false,
        "explanation": "通信を必ず平文にするは正解ではありません。"
      },
      {
        "text": "画像を印刷する",
        "isCorrect": false,
        "explanation": "画像を印刷するは正解ではありません。"
      },
      {
        "text": "会計処理を行う",
        "isCorrect": false,
        "explanation": "会計処理を行うは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成29年",
    "question": "LANの説明として適切なものは？",
    "choices": [
      {
        "text": "社内や家庭など比較的狭い範囲のネットワーク",
        "isCorrect": true,
        "explanation": "LANはLocal Area Networkです。"
      },
      {
        "text": "世界中のすべての通信網だけ",
        "isCorrect": false,
        "explanation": "世界中のすべての通信網だけは正解ではありません。"
      },
      {
        "text": "暗号化の鍵",
        "isCorrect": false,
        "explanation": "暗号化の鍵は正解ではありません。"
      },
      {
        "text": "会計帳簿",
        "isCorrect": false,
        "explanation": "会計帳簿は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和6年",
    "question": "WANの説明として適切なものは？",
    "choices": [
      {
        "text": "広い範囲や拠点間を結ぶネットワーク",
        "isCorrect": true,
        "explanation": "WANはWide Area Networkです。"
      },
      {
        "text": "一つのPC内部の部品",
        "isCorrect": false,
        "explanation": "一つのPC内部の部品は正解ではありません。"
      },
      {
        "text": "画面の色設定",
        "isCorrect": false,
        "explanation": "画面の色設定は正解ではありません。"
      },
      {
        "text": "紙の規格",
        "isCorrect": false,
        "explanation": "紙の規格は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和5年",
    "question": "RAMの特徴として適切なものは？",
    "choices": [
      {
        "text": "電源を切ると内容が消える主記憶装置",
        "isCorrect": true,
        "explanation": "RAMは揮発性メモリです。"
      },
      {
        "text": "不揮発性の読み出し専用記憶装置",
        "isCorrect": false,
        "explanation": "不揮発性の読み出し専用記憶装置は正解ではありません。"
      },
      {
        "text": "印刷装置",
        "isCorrect": false,
        "explanation": "印刷装置は正解ではありません。"
      },
      {
        "text": "通信ケーブル",
        "isCorrect": false,
        "explanation": "通信ケーブルは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和4年",
    "question": "ROMの特徴として適切なものは？",
    "choices": [
      {
        "text": "電源を切っても内容が保持される記憶装置",
        "isCorrect": true,
        "explanation": "ROMは不揮発性です。"
      },
      {
        "text": "電源を切ると必ず消える作業用メモリ",
        "isCorrect": false,
        "explanation": "電源を切ると必ず消える作業用メモリは正解ではありません。"
      },
      {
        "text": "通信速度の単位",
        "isCorrect": false,
        "explanation": "通信速度の単位は正解ではありません。"
      },
      {
        "text": "会計ソフト",
        "isCorrect": false,
        "explanation": "会計ソフトは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和3年",
    "question": "SSDの特徴として適切なものは？",
    "choices": [
      {
        "text": "半導体メモリを使う補助記憶装置",
        "isCorrect": true,
        "explanation": "SSDはストレージの一種です。"
      },
      {
        "text": "紙を読み取る装置",
        "isCorrect": false,
        "explanation": "紙を読み取る装置は正解ではありません。"
      },
      {
        "text": "通信回線の種類だけ",
        "isCorrect": false,
        "explanation": "通信回線の種類だけは正解ではありません。"
      },
      {
        "text": "画面の明るさ",
        "isCorrect": false,
        "explanation": "画面の明るさは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和2年",
    "question": "可逆圧縮の説明として適切なものは？",
    "choices": [
      {
        "text": "圧縮前のデータを完全に復元できる",
        "isCorrect": true,
        "explanation": "可逆圧縮は完全復元が可能です。"
      },
      {
        "text": "必ず元に戻せない",
        "isCorrect": false,
        "explanation": "必ず元に戻せないは正解ではありません。"
      },
      {
        "text": "通信を暗号化する",
        "isCorrect": false,
        "explanation": "通信を暗号化するは正解ではありません。"
      },
      {
        "text": "紙を薄くする",
        "isCorrect": false,
        "explanation": "紙を薄くするは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成31年",
    "question": "非可逆圧縮の説明として適切なものは？",
    "choices": [
      {
        "text": "一部の情報を失い、完全には元に戻らないことがある",
        "isCorrect": true,
        "explanation": "非可逆圧縮は容量削減に使われます。"
      },
      {
        "text": "必ず完全復元できる",
        "isCorrect": false,
        "explanation": "必ず完全復元できるは正解ではありません。"
      },
      {
        "text": "データを暗号化するだけ",
        "isCorrect": false,
        "explanation": "データを暗号化するだけは正解ではありません。"
      },
      {
        "text": "会計処理を行う",
        "isCorrect": false,
        "explanation": "会計処理を行うは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成30年",
    "question": "ログ管理の目的として適切なものは？",
    "choices": [
      {
        "text": "障害や不正の調査に必要な記録を残す",
        "isCorrect": true,
        "explanation": "ログは追跡や監査に必要です。"
      },
      {
        "text": "記録を即時削除する",
        "isCorrect": false,
        "explanation": "記録を即時削除するは正解ではありません。"
      },
      {
        "text": "誰でも改ざんできるようにする",
        "isCorrect": false,
        "explanation": "誰でも改ざんできるようにするは正解ではありません。"
      },
      {
        "text": "時刻を記録しない",
        "isCorrect": false,
        "explanation": "時刻を記録しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成29年",
    "question": "変更管理の目的として適切なものは？",
    "choices": [
      {
        "text": "変更による障害リスクを抑える",
        "isCorrect": true,
        "explanation": "変更管理は安定運用に役立ちます。"
      },
      {
        "text": "無断変更を増やす",
        "isCorrect": false,
        "explanation": "無断変更を増やすは正解ではありません。"
      },
      {
        "text": "影響確認をなくす",
        "isCorrect": false,
        "explanation": "影響確認をなくすは正解ではありません。"
      },
      {
        "text": "戻し手順を禁止する",
        "isCorrect": false,
        "explanation": "戻し手順を禁止するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和6年",
    "question": "構成管理の対象として適切なものは？",
    "choices": [
      {
        "text": "サーバ、ソフトウェア、設定情報など",
        "isCorrect": true,
        "explanation": "構成管理はIT資産の状態を管理します。"
      },
      {
        "text": "社員の昼食だけ",
        "isCorrect": false,
        "explanation": "社員の昼食だけは正解ではありません。"
      },
      {
        "text": "紙の色だけ",
        "isCorrect": false,
        "explanation": "紙の色だけは正解ではありません。"
      },
      {
        "text": "机の高さだけ",
        "isCorrect": false,
        "explanation": "机の高さだけは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和5年",
    "question": "サービスデスクの役割として適切なものは？",
    "choices": [
      {
        "text": "利用者からの問い合わせや障害連絡を受け付ける",
        "isCorrect": true,
        "explanation": "サービスデスクは窓口機能です。"
      },
      {
        "text": "障害を隠す",
        "isCorrect": false,
        "explanation": "障害を隠すは正解ではありません。"
      },
      {
        "text": "利用者を管理対象外にする",
        "isCorrect": false,
        "explanation": "利用者を管理対象外にするは正解ではありません。"
      },
      {
        "text": "記録を消す",
        "isCorrect": false,
        "explanation": "記録を消すは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和4年",
    "question": "インシデント管理の目的として適切なものは？",
    "choices": [
      {
        "text": "影響を最小化し通常運用へ復旧する",
        "isCorrect": true,
        "explanation": "インシデント管理は早期復旧を重視します。"
      },
      {
        "text": "原因分析だけして復旧しない",
        "isCorrect": false,
        "explanation": "原因分析だけして復旧しないは正解ではありません。"
      },
      {
        "text": "問い合わせを拒否する",
        "isCorrect": false,
        "explanation": "問い合わせを拒否するは正解ではありません。"
      },
      {
        "text": "記録しない",
        "isCorrect": false,
        "explanation": "記録しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和3年",
    "question": "問題管理の目的として適切なものは？",
    "choices": [
      {
        "text": "根本原因を分析し再発防止を行う",
        "isCorrect": true,
        "explanation": "問題管理は再発防止に重点を置きます。"
      },
      {
        "text": "障害を繰り返す",
        "isCorrect": false,
        "explanation": "障害を繰り返すは正解ではありません。"
      },
      {
        "text": "原因を調べない",
        "isCorrect": false,
        "explanation": "原因を調べないは正解ではありません。"
      },
      {
        "text": "記録を削除する",
        "isCorrect": false,
        "explanation": "記録を削除するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和2年",
    "question": "負荷分散の説明として適切なものは？",
    "choices": [
      {
        "text": "処理を複数の装置に分ける",
        "isCorrect": true,
        "explanation": "負荷分散は性能や可用性を高めます。"
      },
      {
        "text": "一台に集中させる",
        "isCorrect": false,
        "explanation": "一台に集中させるは正解ではありません。"
      },
      {
        "text": "通信を必ず止める",
        "isCorrect": false,
        "explanation": "通信を必ず止めるは正解ではありません。"
      },
      {
        "text": "データを削除する",
        "isCorrect": false,
        "explanation": "データを削除するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成31年",
    "question": "キャッシュの目的として適切なものは？",
    "choices": [
      {
        "text": "よく使うデータを一時保存して応答を速くする",
        "isCorrect": true,
        "explanation": "キャッシュは高速化に使われます。"
      },
      {
        "text": "データを永久に削除する",
        "isCorrect": false,
        "explanation": "データを永久に削除するは正解ではありません。"
      },
      {
        "text": "通信を暗号化するだけ",
        "isCorrect": false,
        "explanation": "通信を暗号化するだけは正解ではありません。"
      },
      {
        "text": "紙を保管する",
        "isCorrect": false,
        "explanation": "紙を保管するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成30年",
    "question": "システム監査の目的として適切なものは？",
    "choices": [
      {
        "text": "情報システムの信頼性、安全性、効率性などを評価する",
        "isCorrect": true,
        "explanation": "システム監査は統制や管理状況を評価します。"
      },
      {
        "text": "監査記録を残さない",
        "isCorrect": false,
        "explanation": "監査記録を残さないは正解ではありません。"
      },
      {
        "text": "システムを必ず停止する",
        "isCorrect": false,
        "explanation": "システムを必ず停止するは正解ではありません。"
      },
      {
        "text": "利用者を無視する",
        "isCorrect": false,
        "explanation": "利用者を無視するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成29年",
    "question": "内部統制の例として適切なものは？",
    "choices": [
      {
        "text": "承認手続きや職務分掌を設ける",
        "isCorrect": true,
        "explanation": "内部統制は不正や誤りの防止に役立ちます。"
      },
      {
        "text": "一人が無確認で全作業を行う",
        "isCorrect": false,
        "explanation": "一人が無確認で全作業を行うは正解ではありません。"
      },
      {
        "text": "記録を残さない",
        "isCorrect": false,
        "explanation": "記録を残さないは正解ではありません。"
      },
      {
        "text": "権限を全員同じにする",
        "isCorrect": false,
        "explanation": "権限を全員同じにするは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和6年",
    "question": "ソーシャルエンジニアリング対策として適切なものは？",
    "choices": [
      {
        "text": "本人確認手順を徹底する",
        "isCorrect": true,
        "explanation": "人をだます攻撃には手順と教育が有効です。"
      },
      {
        "text": "電話なら情報を無条件に教える",
        "isCorrect": false,
        "explanation": "電話なら情報を無条件に教えるは正解ではありません。"
      },
      {
        "text": "社員証を貸し借りする",
        "isCorrect": false,
        "explanation": "社員証を貸し借りするは正解ではありません。"
      },
      {
        "text": "来訪者を確認しない",
        "isCorrect": false,
        "explanation": "来訪者を確認しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和5年",
    "question": "マルウェア対策として適切なものは？",
    "choices": [
      {
        "text": "ウイルス対策ソフトや更新、教育を組み合わせる",
        "isCorrect": true,
        "explanation": "複数の対策を組み合わせることが重要です。"
      },
      {
        "text": "出所不明ファイルを実行する",
        "isCorrect": false,
        "explanation": "出所不明ファイルを実行するは正解ではありません。"
      },
      {
        "text": "更新を止める",
        "isCorrect": false,
        "explanation": "更新を止めるは正解ではありません。"
      },
      {
        "text": "感染を報告しない",
        "isCorrect": false,
        "explanation": "感染を報告しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和4年",
    "question": "バックアップ運用として適切なものは？",
    "choices": [
      {
        "text": "定期的に取得し復元確認を行う",
        "isCorrect": true,
        "explanation": "バックアップは復元できることが重要です。"
      },
      {
        "text": "取得後すぐ削除する",
        "isCorrect": false,
        "explanation": "取得後すぐ削除するは正解ではありません。"
      },
      {
        "text": "同じ場所に一つだけ置く",
        "isCorrect": false,
        "explanation": "同じ場所に一つだけ置くは正解ではありません。"
      },
      {
        "text": "復元手順を残さない",
        "isCorrect": false,
        "explanation": "復元手順を残さないは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和3年",
    "question": "無線LANの暗号化として適切な考え方は？",
    "choices": [
      {
        "text": "安全な方式を選び強いパスワードを設定する",
        "isCorrect": true,
        "explanation": "無線LANは暗号化と認証が大切です。"
      },
      {
        "text": "暗号化なしで公開する",
        "isCorrect": false,
        "explanation": "暗号化なしで公開するは正解ではありません。"
      },
      {
        "text": "初期パスワードを共有する",
        "isCorrect": false,
        "explanation": "初期パスワードを共有するは正解ではありません。"
      },
      {
        "text": "管理画面を公開する",
        "isCorrect": false,
        "explanation": "管理画面を公開するは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "令和2年",
    "question": "ライセンス管理として適切なものは？",
    "choices": [
      {
        "text": "利用条件と利用数を把握する",
        "isCorrect": true,
        "explanation": "ソフトウェアはライセンスに従って利用します。"
      },
      {
        "text": "契約数を超えて利用する",
        "isCorrect": false,
        "explanation": "契約数を超えて利用するは正解ではありません。"
      },
      {
        "text": "無断コピーする",
        "isCorrect": false,
        "explanation": "無断コピーするは正解ではありません。"
      },
      {
        "text": "条件を確認しない",
        "isCorrect": false,
        "explanation": "条件を確認しないは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成31年",
    "question": "オープンソースソフトウェア利用時に確認すべきものは？",
    "choices": [
      {
        "text": "ライセンス条件",
        "isCorrect": true,
        "explanation": "OSSにもライセンス条件があります。"
      },
      {
        "text": "紙の厚さ",
        "isCorrect": false,
        "explanation": "紙の厚さは正解ではありません。"
      },
      {
        "text": "社員番号",
        "isCorrect": false,
        "explanation": "社員番号は正解ではありません。"
      },
      {
        "text": "会議室番号",
        "isCorrect": false,
        "explanation": "会議室番号は正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成30年",
    "question": "データ入力ミス対策として適切なものは？",
    "choices": [
      {
        "text": "入力チェックや選択式入力を用いる",
        "isCorrect": true,
        "explanation": "入力チェックは誤入力防止に役立ちます。"
      },
      {
        "text": "確認を禁止する",
        "isCorrect": false,
        "explanation": "確認を禁止するは正解ではありません。"
      },
      {
        "text": "自由入力だけにする",
        "isCorrect": false,
        "explanation": "自由入力だけにするは正解ではありません。"
      },
      {
        "text": "エラー表示を消す",
        "isCorrect": false,
        "explanation": "エラー表示を消すは正解ではありません。"
      }
    ]
  },
  {
    "type": "過去問",
    "year": "平成29年",
    "question": "データ分析前に行う前処理として適切なものは？",
    "choices": [
      {
        "text": "欠損値、重複、形式の確認",
        "isCorrect": true,
        "explanation": "前処理は分析品質を高めます。"
      },
      {
        "text": "内容を見ずに分析する",
        "isCorrect": false,
        "explanation": "内容を見ずに分析するは正解ではありません。"
      },
      {
        "text": "重複を増やす",
        "isCorrect": false,
        "explanation": "重複を増やすは正解ではありません。"
      },
      {
        "text": "単位を混在させる",
        "isCorrect": false,
        "explanation": "単位を混在させるは正解ではありません。"
      }
    ]
  }
];
