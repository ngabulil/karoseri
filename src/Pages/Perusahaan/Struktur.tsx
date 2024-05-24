import { useEffect, useRef } from "react";

const Struktur = () => {
  const data: {
    level: number;
    name: string;
    position: string;
    after?: boolean;
    before?: boolean;
    children?: {
      name: string;
      position: string;
    }[];
  }[][] = [
    [
      {
        level: 1,
        name: "H. Sabar",
        position: "Owner",
      },
    ],
    [
      {
        level: 2,
        name: "Drs. SURMADI",
        position: "Direktur",
        after: true,
      },
      {
        level: 2,
        name: "M. ABDUL MUHYI",
        position: "Wakil Direktur",
        before: true,
      },
    ],
    [
      {
        level: 3,
        name: "SUSANTO",
        position: "Kepala Divisi",
        after: true,
      },
      {
        level: 3,
        name: "KAMAL",
        position: "Kepala Divisi",
        before: true,
        after: true,
      },
      {
        level: 3,
        name: "SUBANDI",
        position: "ENGINEERING",
        before: true,
      },
    ],
    [
      {
        level: 4,
        name: "TARJAK",
        position: "Staf Produksi",
        after: true,
        children: [
          {
            name: "Kayat",
            position: "Produksi",
          },
          {
            name: "Kayat",
            position: "Produksi",
          },
          {
            name: "Kayat",
            position: "Produksi",
          },
        ],
      },
      {
        level: 4,
        name: "TARJAK 2",
        position: "Staf Produksi",
        before: true,
        after: true,
        children: [
          {
            name: "Kayat",
            position: "Produksi",
          },
          {
            name: "Kayat",
            position: "Produksi",
          },
          {
            name: "Kayat",
            position: "Produksi",
          },
        ],
      },
      {
        level: 4,
        name: "TARJAK",
        position: "Staf Produksi",
        before: true,
        children: [
          {
            name: "Kayat",
            position: "Produksi",
          },
          {
            name: "Kayat",
            position: "Produksi",
          },
          {
            name: "Kayat",
            position: "Produksi",
          },
        ],
      },
    ],
  ];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      // Menghitung lebar konten dalam div
      const scrollWidth = scrollRef.current.scrollWidth;
      // Mengatur posisi scroll ke 50% dari lebar konten
      scrollRef.current.scrollLeft = scrollWidth / 4;
    }
  }, []);
  return (
    <section>
      <div className="max-w-8xl mx-auto px-12">
        <h2 className="text-3xl font-bold text-center mb-6">
          Struktur Organisasi
        </h2>
        <div className="overflow-auto" ref={scrollRef}>
          <div className="pb-8 min-w-[675px]">
            {data.map((val, index) => (
              <div
                className={`grid relative py-4 before:content-[''] before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[50%] before:translate-x-[-50%] before:h-full before:bg-black before:w-[1px] ${
                  index === 0 && "pt-0"
                } ${index === data.length - 1 && "pb-0"}`}
                style={{ gridTemplateColumns: `repeat(${val.length}, 1fr)` }}
              >
                {val.map((v) => (
                  <div
                    className={`${
                      v.children ? "block" : "flex"
                    } relative justify-center ${
                      v.before &&
                      "before:content-[''] before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:border-t-2 before:w-1/2 before:border-black"
                    } ${
                      v.after &&
                      "after:content-[''] after:absolute after:top-[50%] after:translate-y-[-50%] after:right-0 after:border-t-2 after:w-1/2 after:border-black"
                    } ${
                      v.children &&
                      v.after &&
                      "after:top-[26px] after:border-black"
                    } ${v.children && v.before && "before:top-[26px]"}`}
                  >
                    <div className="relative z-[1] border-black bg-slate-200 border-2 border-solid w-full text-center rounded-lg max-w-[250px] mx-auto max1000:max-w-[200px]">
                      <div className="font-bold text-lg">{v.name}</div>
                      <div>{v.position}</div>
                    </div>
                    {v.children && (
                      <div className="mt-8 border-2 bg-slate-200 rounded-lg border-solid border-black max-w-[250px] mx-auto before:content-[''] before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[50%] before:translate-x-[-50%] before:h-full before:w-[1px] before:bg-black max1000:max-w-[200px]">
                        {v.children?.map((child, i, arr) => (
                          <div
                            className={`w-full text-center ${
                              arr.length !== i + 1 && "pb-2"
                            } rounded-lg mx-auto relative z-[1] bg-slate-200`}
                          >
                            <div className="font-bold text-lg">
                              {child.name}
                            </div>
                            <div>{child.position}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Struktur;
