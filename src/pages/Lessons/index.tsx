import { CheckCircle, CircleDashed, Link } from "phosphor-react";
import { apiData } from "../../api/data"
import { useState } from "react";
import { any } from "zod";

export function Lessons() {

  const [data, setData] = useState(apiData)

  const getLessons = (module: any) => {
    return data?.lessons?.filter((lesson) => lesson?.module === module);
  };

  function handleFinished(index: number, module: string) {
    const updatedLessons = data.lessons.map((lesson, i) => {
      if (lesson.module === module && i === index) {
        return { ...lesson, finished: true };
      }
      return lesson;
    });

    setData((prevData) => ({
      ...prevData,
      lessons: updatedLessons,
    }));
  }

  function handleNotFinished(index: number, module: string) {
    const updatedLessons = data.lessons.map((lesson, i) => {
      if (lesson.module === module && i === index) {
        return { ...lesson, finished: false };
      }
      return lesson;
    });

    setData((prevData) => ({
      ...prevData,
      lessons: updatedLessons,
    }));
  }

  return (
    <>
      {
        data?.modules?.map((module) => (
          <div
            key={module?.type}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              margin: "auto",
              width: "75rem",
              marginTop: "10px"
            }} >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
                marginTop: "20px"
              }}>
              <Link size={25}
                color="#fafafa"
                weight="thin"
              />
              <a
                style={{
                  fontSize: "25px",
                  fontWeight: "bold"
                }}
                href={module?.link}
                target="blank">
                {module?.name}
              </a>

            </div>
            {
              getLessons(module?.type).map((data, index) => (
                <div
                  key={data?.title}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                    gap: "8px"
                  }}>
                  {
                    data?.finished ? (
                      <>
                        <CheckCircle
                          size={20}
                          color="#47d016"
                          weight="fill"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleNotFinished(index, data?.module)}
                        />
                        <p key={index}>{data?.title}</p>
                      </>
                    ) : (
                      <>
                        <CircleDashed
                          size={20}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleFinished(index, data?.module)}
                        />
                        <p key={index}>{data?.title}</p>

                      </>
                    )
                  }
                </div>
              ))
            }
          </div>
        ))
      }
    </>
  )
}