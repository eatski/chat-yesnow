import { Story } from "@/server/model/types";

export const sample1: Story = {
    title: "太郎さんのメガネ",
    description: "サンプルです。",
    quiz: "太郎さんは視力がとてもいいのにメガネをかけている。なぜか？",
    truth: "太郎さんはオシャレ好きであり、おしゃれのために伊達メガネをかけている。",
    simpleTruth: "太郎さんはオシャレ好きで、オシャレのために伊達メガネをかけている。",
    questionExamples: [
        {
            question: "太郎さんのメガネには度が入っていますか？",
            answer: "FALSE",
            supplement: "太郎さんのメガネは伊達メガネであり、度は入っていません。",
        },
        {
            question: "太郎さんのメガネはブルーライトカットですか？",
            answer: "FALSE",
            supplement: "太郎さんのメガネにブルーライトカット機能はありません。",
        },
        {
            question: "太郎さんはおしゃれのためにメガネをかけていますか？",
            answer: "TRUE",
            supplement: "太郎さんはオシャレ好きであり、オシャレのためにメガネをかけています。",
        },
        {
            question: "太郎さんは男ですか?",
            answer: "UNKNOWN",
            supplement: "太郎さんの性別については言及されていません。",
        }
    ],
    createdAt: new Date(),
}

export const sample2: Story = {
    title: "女性用トイレの男性",
    description: "サンプルです。",
    quiz: "とある女性用トイレにいる山田さんは実は男性である。彼はのっぴきならぬ事情でそこにいるのだが、それはなぜか？",
    truth: `
    山田さんがいるのは人気のない深夜の公園の公衆便所。
    その日、山田さん人を殺害し男性用トイレに死体を隠そうとした。
    しかし、その途中で山田さんはトイレに向かってくる複数の男性の喋り声に気づく。
    幸い、男性の位置からはトイレの入り口は見えない。
    山田さんは彼らに見つからないように、そっと女性用トイレに入った。
    `,
    simpleTruth: "山田さんは人を殺害し男性用トイレに死体を隠そうとしたが、用を足しに来た男性に見つかりそうになり女性用トイレに逃げ込んだ。",
    questionExamples: [
        {
            question: "山田さんは人を殺害しましたか？",
            answer: "TRUE" ,
            supplement: "山田さんは人を殺害し、男性用トイレに死体を隠そうとしました。",
        },
        {
            question: "山田さんは心が女性ですか？",
            answer: "UNKNOWN",
            supplement: "山田さんの心の性別については言及されていません。",
        },
        {
            question: "山田さんは子供であり、保護者と一緒にいますか？",
            answer: "FALSE" ,
            supplement: "山田さんは大人であり、1人で女性トイレにいます。",
        },
        {
            question: "山田さんは隠れるために女性用トイレに入りましたか？",
            answer: "TRUE",
            supplement: "山田さんは男性用トイレに死体を隠そうとしましたが、他の男性が来たため隠れるために女性用トイレに入りました。",
        },
        {
            question: "トイレは公園にありますか？",
            answer: "TRUE",
            supplement: "トイレは公園にある公衆便所です。",
        },
        {
            question: "トイレは山田さんの家にありますか？",
            answer: "FALSE",
            supplement: "トイレは山田さんの家にはありません。",
        },
        {
            question: "トイレは人目につく場所にありますか？",
            answer: "UNKNOWN",
            supplement: "トイレは人目につく場所にはあるかは言及されていませんが、深夜の公園の公衆便所であるため、その時点では人目につくとは考えにくいです。",
        },
        {
            question: "山田さんはトイレに用を足しに来ましたか？",
            answer: "FALSE",
            supplement: "山田さんはトイレに用を足しに来たのではなく、死体を隠そうとしました。",
        },
        {
            question: "山田さんはトイレに用を足しに来た男性を殺害しましたか？",
            answer: "FALSE",
            supplement: "山田さんはトイレに用を足しに来た男性を殺害せず、見つからないようにかくれました。",
        },
        {
            question: "山田さんは意図的に女性用トイレに入りましたか？",
            answer: "TRUE",
            supplement: "山田さんは隠れるために意図して女性用トイレに入りました。",
        },
        {
            question: "トイレは山田さんの家の近くにありますか？",
            answer: "UNKNOWN",
            supplement: "トイレは山田さんの家の近くにあるかは言及されていません。",
        },
        {
            question: "山田さんの他に登場人物はいますか？",
            answer: "TRUE",
            supplement: "山田さんの他に、トイレに用を足しに来た男性がいます。",
        },
        {
            question: "女性用トイレに山田さん以外に人はいますか？",
            answer: "UNKNOWN",
            supplement: "女性用トイレに山田さん以外に人がいるかは言及されていません。",
        },
        {
            question: "男性用トイレに人はいますか？",
            answer: "TRUE" ,
            supplement: "男性用トイレには、トイレに用を足しに来た男性が入ろうとしているか、既に入っています。",
        }
    ],
    createdAt: new Date(),
}

export const sample3 : Story = {
    title: "あなたに向かって",
    description: "サンプルです。",
    quiz: "残業中の森田さんは気になってビルの窓から下の路地裏を眺めた。森田さんには男性が自分のいる方向に向かって指を差して何かを喋っているのが見える。男性を言っているのだろうか？",
    truth: `
    残業中の森田さんは窓の外から聞こえた悲鳴が気になってビルの窓から下の路地裏を眺めた。
    そこには横たわる死体とそのすぐそばにいる男性。森田さんは男性が人を殺しているのを見てしまったのだ。
    男性は窓から殺人を目撃したであろう森田さんに気づき、窓に向かって指を差して「1階,2階,３階...」と数えている。
    男性は目撃者である森田さんを口封じに殺すために、森田さんが今ビルの何階にいるかを指差し数えているのだ。
    `,
    simpleTruth: "森田さんは路地裏で男性が人を殺しているのを目撃してしまった。男性は目撃者である森田さんを殺そうと、森田さんが今ビルの何階にいるかをビルの方を指差し口に出してそれを数えている。",
    questionExamples: [
        {
            question: "森田さんは人を殺害しましたか？",
            answer: "FALSE",
            supplement: "人を殺害したのは路地裏の男性で、森田さんは人を殺害していません。",
        },
        {
            question: "森田さんは殺人を目撃しましたか？",
            answer: "TRUE",
            supplement: "森田さんは路地裏で男性が人を殺害しているのを目撃しました。",
        },
        {
            question: "男性は人を殺害しましたか？",
            answer: "TRUE",
            supplement: "男性は路地裏で人を殺害しました。",
        },
        {
            question: "男性は森田さんを殺害しようとしていますか？",
            answer: "TRUE",
            supplement: "男性は森田さんを殺害しようと、今ビルの何階にいるかを数えています。",
        },
        {
            question: "男性は森田さんに何かを伝えようとしていますか？",
            answer: "FALSE",
            supplement: "男性は森田さんに伝えたいことがあるわけではなく、単に森田さんが今ビルの何階にいるかを数えています。",
        },
        {
            question: "男性の声は森田さんに聞こえていますか？",
            answer: "UNKNOWN",
            supplement: "男性の声が森田さんに聞こえているかは言及されていません。",
        },
        {
            question: "森田さんの他にビルの中に人はいますか？",
            answer: "UNKNOWN",
            supplement: "森田さんの他にビルの中に人がいるかは言及されていません。",
        },
        {
            question: "森田さんはビルの高い階にいますか？",
            answer: "TRUE",
            supplement: "男性がわざわざ森田さんが今ビルの何階にいるかを数えているので、森田さんはビルの高い階にいると考えられます。",
        },
        {
            question: "森田さんが何の仕事の残業中かは真相に関係ありますか？",
            answer: "FALSE",
            supplement: "森田さんが何の仕事の残業中かは真相に関係ありません。",
        },
    ],
    createdAt: new Date(),

}