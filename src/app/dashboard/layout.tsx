// Path: src\app\dashboard\layout.tsx
"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onToggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-6">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            rerum incidunt, tempore asperiores ipsum ducimus, unde dolorem
            distinctio non temporibus quod eos, illum tempora. Quaerat
            consequatur consequuntur odit quam, iste reiciendis quos amet
            maiores accusantium saepe, optio beatae sapiente, odio dolorem
            inventore id tempore exercitationem eos voluptates quidem
            repellendus dicta cumque repellat at. Ipsum ut quos facere in
            ratione voluptatem placeat, neque vero recusandae, necessitatibus
            harum laudantium non suscipit praesentium! Libero dicta molestias a
            eligendi eaque delectus consectetur dolor. Eligendi aspernatur harum
            reprehenderit totam impedit nulla laudantium sunt quaerat sit minus,
            ut nobis quam amet similique rem? Ratione laboriosam iusto numquam,
            soluta dolores modi temporibus quaerat obcaecati nemo ad ullam
            expedita in saepe optio nobis similique eligendi! Ipsum distinctio
            officiis hic illum quam amet nesciunt sequi nisi repellat pariatur
            blanditiis voluptatibus unde minima ea iure eaque harum maxime
            provident, facilis dignissimos mollitia alias accusamus esse. Atque
            reiciendis quae temporibus, corrupti deserunt cupiditate totam eum
            qui voluptatum earum, aut optio assumenda adipisci placeat voluptas
            commodi culpa iure quisquam voluptatibus. Vel delectus nesciunt
            corporis ipsum magni repellendus reprehenderit doloribus eveniet
            quos accusantium, omnis ad quia nobis non libero quae minima hic
            temporibus ratione, odit maiores, ullam atque? Molestias, saepe
            nulla, explicabo, aliquid nesciunt porro dolore beatae assumenda
            tempore corrupti in velit! Porro quod ducimus, fugiat corporis
            debitis iure, ab cumque dicta, est vitae reiciendis saepe alias!
            Exercitationem maiores asperiores aliquid ut enim iure, odio fugit!
            A ipsa nemo numquam libero quaerat, doloremque aperiam dolores
            eveniet voluptatibus repellendus eum. Ad esse sequi magnam qui.
            Similique laudantium aspernatur praesentium accusamus mollitia error
            sapiente repellendus, ratione sint illo. Quas consequuntur
            consequatur eaque facere quia pariatur laudantium recusandae? Vel
            minima quas atque accusantium doloremque nisi distinctio soluta
            fugiat, cumque tempora aut asperiores dolorem tempore voluptatum
            aspernatur dolor error amet vero, deserunt veritatis illum. Tempore
            quia voluptatum, nesciunt explicabo nobis excepturi sapiente,
            expedita ea iusto dolorem deleniti, hic odit minus ullam. Doloremque
            deserunt esse praesentium, repellat ab assumenda recusandae
            asperiores dolore atque reprehenderit corrupti exercitationem rem
            quasi laboriosam non itaque magnam. Quas delectus aliquam libero
            amet velit cupiditate! Aspernatur saepe doloremque, odio veniam eum
            nulla molestiae, qui, exercitationem quaerat magnam ducimus aliquam.
            Praesentium blanditiis placeat possimus quos alias inventore,
            tempore sapiente animi nostrum sunt. Ad perferendis possimus
            cupiditate, harum quod impedit earum inventore minima ipsum! Animi
            asperiores reiciendis voluptatibus voluptatem consequatur quas id
            laboriosam, quasi pariatur omnis sit ducimus error blanditiis.
            Maxime quae odio maiores laboriosam soluta! Atque aut ducimus qui
            blanditiis tempore ullam, id deleniti esse quibusdam est quisquam ab
            ratione ipsa sed amet error beatae quasi. Exercitationem enim culpa
            cumque quaerat magnam ipsa ut aliquam odio eveniet quam rem, alias
            corporis optio iste quas perspiciatis nesciunt delectus quia totam
            illum. Quisquam quaerat doloremque quod error esse excepturi
            cupiditate sunt aut pariatur iure obcaecati quo, facere voluptatum
            debitis eveniet fugit corrupti asperiores nostrum nobis vero ab?
            Illum officia aut similique id eos rem cupiditate quas natus maxime
            quidem inventore, esse ipsa, perspiciatis ratione quod quae eum
            sapiente fugit alias sequi! Quasi veritatis illo mollitia inventore
            incidunt quaerat facere assumenda vero fugit cumque. Illum quidem
            magnam tempora architecto, repudiandae atque quas obcaecati a
            asperiores facilis tenetur. Delectus eligendi laboriosam dicta,
            totam maiores officiis aspernatur fugiat quibusdam accusantium
            aliquam qui rem ducimus vero sit quod quidem? Accusantium reiciendis
            voluptates voluptatibus, nihil, hic delectus distinctio incidunt
            aliquam aperiam repellendus reprehenderit ab! Ea eveniet beatae
            tenetur quam sed dolorem, adipisci reiciendis maiores vitae,
            molestias, nihil doloribus iste voluptas ipsa laborum? Provident
            asperiores corrupti dolores minima doloribus consectetur iusto
            temporibus repellendus incidunt sit placeat tenetur impedit dolor
            recusandae illo quam mollitia suscipit error, eius, ipsa deleniti
            perferendis laborum, nam in? Repudiandae.
          </p>
        </main>
      </div>
    </div>
  );
}
