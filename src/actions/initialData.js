export const initialData = {
  boards: [
    {
      id: "board-1",
      columnOrder: ["column-1", "column-2", "column-3"],
      columns: [
        {
          id: "column-1",
          boardId: "board-1",
          title: "To do column",
          cardOrder: ["card-1", "card-2", "card-3", "card-4", "card-5", "card-6"],
          cards: [
            {
              id: "card-1",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 1",
              cover: "https://scontent.fhan14-1.fna.fbcdn.net/v/t45.1600-4/277895101_6292993313882_1968459955091717650_n.jpg?stp=cp0_dst-jpg_p180x540_q75_spS444&_nc_cat=107&ccb=1-5&_nc_sid=67cdda&_nc_ohc=peTOX7IllF0AX-wc6ov&_nc_ht=scontent.fhan14-1.fna&oh=00_AT8QmQNCN3S_7LV7W1e915MiUFFWlQyTKB0-5le9ESLtpA&oe=62664F45",
            },
            {
              id: "card-2",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 2",
              cover: null,
            },
            {
              id: "card-3",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 3",
              cover: null,
            },
            {
              id: "card-4",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 4",
              cover: null,
            },
            {
              id: "card-5",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 5",
              cover: null,
            },
            {
              id: "card-6",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 6",
              cover: null,
            },
          ],
        },
        {
            id: "column-2",
            boardId: "board-1",
            title: "Inprogress column",
            cardOrder: ["card-8", "card-9", "card-10"],
            cards: [
              { id: "card-8", boardId: "board-1", columnId: "column-2", title: "Title of card 8", cover: null },
              { id: "card-9", boardId: "board-1", columnId: "column-2", title: "Title of card 9", cover: null },
              { id: "card-10", boardId: "board-1", columnId: "column-2", title: "Title of card 10", cover: null },
            ],
        },
        {
            id: "column-3",
            boardId: "board-1",
            title: "Done column",
            cardOrder: ["card-11", "card-12", "card-13"],
            cards: [
              { id: "card-11", boardId: "board-1", columnId: "column-3", title: "Title of card 11", cover: null },
              { id: "card-12", boardId: "board-1", columnId: "column-3", title: "Title of card 12", cover: null },
              { id: "card-13", boardId: "board-1", columnId: "column-3", title: "Title of card 13", cover: null },
            ],
        },
      ],
    },
  ],
};
