//dibuat oleh cey
import Evolution from "./Evolution"
import TypeEffect from "./TypeEffect"
import Logo from "./Logo"

export default function CardInfo({ title }) {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100 border border-indigo-300 p-6 rounded-2xl shadow-md mt-6">
      <h3 className="text-2xl font-extrabold text-center text-indigo-700 mb-6">
        {title || "Info Terbaru Mobile Legends"}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {}
        <Evolution
          title="Hero Revamp: Kekuatan Baru Land of Dawn"
          text="Revamp Layla pada Project mengubah tampilannya, memperkuat kemampuannya dengan damage lebih besar dan efek stun, serta penambahan jangkauan serangan dasar yang signifikan melalui skill 1 dan ultimate-nya. Skill 1-nya sekarang memberikan damage fisik, memperluas jangkauan Basic Attack dan memberikan Movement Speed, sedangkan skill 2-nya memberikan damage, efek slow, dan efek Stun pada lawan yang terkena Magic Mark. "
          color="bg-red-600"
          image="/layla-revamp.jpg"
        />

        {}
        <TypeEffect
          title="Event skin Kishin Densetsu!"
          text="Event skin Kishin Densetsu adalah event di Mobile Legends: Bang Bang (MLBB) yang menawarkan skin eksklusif bertema dewa iblis Jepang untuk hero seperti Karrie, Lancelot, dan Angela. Pemain mendapatkan skin tersebut melalui event gacha dengan menggunakan Tri Magatama atau Underworld Crest (token draw), yang bisa diperoleh dengan cara login, menyelesaikan misi, atau top-up. Event ini juga menyediakan diskon gacha harian dan jaminan mendapatkan skin permanen dalam 10 draw pertama. "
          color="bg-orange-500"
          image="/event.jpg"
        />

        {}
        <Logo
          title="Kolaborasi Terbaru Mobile Legends x Anime"
          text="Mobile Legends: Bang Bang (MLBB) dengan Jujutsu Kaisen tahun 2024 adalah Premium Supply yang berlangsung dalam dua tahap, yaitu 15-18 Juni dan 29 Juni-2 Juli 2024. Event ini menghadirkan empat skin karakter MLBB yang didesain ulang menjadi karakter dari Jujutsu Kaisen: Yin sebagai Yuji Itadori, Julian sebagai Megumi Fushiguro, Melissa sebagai Nobara Kugisaki, dan Xavier sebagai Satoru Gojo. Pemain harus mengumpulkan mata uang dalam event, seperti Crest, atau menggunakan Diamond untuk mendapatkan skin-skin tersebut melalui mekanisme draw. "
          color="bg-blue-600"
          image="/ml-anime-collab.jpg"
        />
      </div>
    </div>
  )
}
