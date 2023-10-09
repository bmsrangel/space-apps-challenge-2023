import { CardWithTitle } from "@/pages/components/CardWithTitle/CardWithTitle";
import { Card } from "../Card/Card";
import { useAppState } from "@/src/hooks/AppStateContext";
import { RecommendationCard } from "@/pages/components/RecommendationCard/RecommendationCard";

import all from "@/public/all.png";
import family from "@/public/family.png";
import sports from "@/public/sports.png";
import pregnancy from "@/public/pregnancy.png";
import respiratory from "@/public/respiratory.png";
import elderly from "@/public/elderly.png";
import cardiovascular from "@/public/cardiovascular.png";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Details = () => {
  const { globalState } = useAppState();
  return (
    <>
      {globalState.details ? (
        <div
          style={{
            padding: "10px 250px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="kpis">
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <Card
                shortCode={"CO"}
                name={"Monóxido de Carbono"}
                unit={"µg/m³"}
                value={1068.12}
                color={"#00FF00"}
                qualification={"Boa"}
              />
              <Card
                shortCode={"NO2"}
                name={"Dióxido de Nitrogênio"}
                unit={"µg/m³"}
                value={62.38}
                color={"#00FFFF"}
                qualification={"Regular"}
              />
              <Card
                shortCode={"O3"}
                name={"Ozônio"}
                unit={"µg/m³"}
                value={44.35}
                color={"#00FF00"}
                qualification={"Boa"}
              />
              <Card
                shortCode={"SO2"}
                name={"Dióxido de Enxofre"}
                unit={"µg/m³"}
                value={22.65}
                color={"#00FFFF"}
                qualification={"Regular"}
              />
              <Card
                shortCode={"PM2.5"}
                name={"Partículas Finas"}
                unit={"µg/m³"}
                value={54.02}
                color={"orange"}
                qualification={"Ruim"}
              />
            </div>
          </div>
          <div>
            <CardWithTitle
              title="Criticidade"
              body="A qualidade do ar não apresenta risco à saúde para um tempo de exposição superior à décadas."
            />
            <CardWithTitle
              title="Solução"
              body="Reduzir as emissões de poluentes, melhorar o transporte público, implementar regulamentações de qualidade do ar, monitorar continuamente os índices, proteger grupos vulneráveis, investir em tecnologias limpas, desenvolver áreas verdes, regular o  tráfego e incentivar o uso de veículos limpos."
            />
          </div>
          <text
            className={inter.className}
            style={{
              paddingTop: "40px",
              paddingBottom: "16px",
              fontSize: "19px",
              fontWeight: "600",
            }}
          >
            RECOMENDAÇÕES
          </text>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <RecommendationCard
              icon={all.src}
              category="Todos"
              recommendation="A qualidade do ar degradada pode causar irritação do trato respiratório e desconforto respiratório."
            />
            <RecommendationCard
              icon={family.src}
              category="Família"
              recommendation="Crianças com um sistema respiratório imaturo são mais afetadas pela má qualidade do ar. Atividades ao ar livre podem ser mantidas, desde que não haja desconforto respiratório ou cardíaco."
            />
            <RecommendationCard
              icon={sports.src}
              category="Esporte"
              recommendation="Atividades físicas aumentam a taxa respiratória, o que leva a uma maior exposição a poluentes e potencialmente a sintomas decorrentes deles."
            />
            <RecommendationCard
              icon={pregnancy.src}
              category="Gestante"
              recommendation="A exposição a poluentes pode afetar o feto e a gravidez (menor peso ao nascer, parto prematuro...)."
            />
            <RecommendationCard
              icon={respiratory.src}
              category="Problemas Respiratórios"
              recommendation="A poluição do ar pode piorar patologias respiratórias, como asma, DPOC, bronquite crônica..."
            />
            <RecommendationCard
              icon={elderly.src}
              category="Idosos"
              recommendation="Com a idade, o sistema respiratório pode enfraquecer e a poluição pode agravar problemas respiratórios."
            />
            <RecommendationCard
              icon={cardiovascular.src}
              category="Problemas Cardiovasculares"
              recommendation="A poluição do ar tem sido implicada no desenvolvimento ou agravamento de doenças cardiovasculares."
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Details;
