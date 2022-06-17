/**
 * create by Kuznetsov Leonid
 * 
 * DATA Base with store
 */
const DATA = {
        items: [
            {
                id: 0,
                title: "Сказочное заморское яство",
                titleSelectedHover: "Котэ не одобряет?",
                name: "Нямушка",
                stuffing: "с фуа-гра",
                portionCount: 10,
                gift: ["мышь в подарок"],
                weight: "0,5",
                status: "notSelected",
                selectedText: "Печень утки разварная с артишоками."
            },
            {
                id: 1,
                title: "Сказочное заморское яство",
                titleSelectedHover: "Котэ не одобряет?",
                name: "Нямушка",
                stuffing: "с рыбой",
                portionCount: 40,
                gift: ["2 мыши в подарок"],
                weight: "2",
                status: "selected",
                selectedText: "Головы щучьи с чесноком да свежайшая сёмгушка."
            },
            {
                id: 2,
                title: "Сказочное заморское яство",
                titleSelectedHover: "Котэ не одобряет?",
                name: "Нямушка",
                stuffing: "с курой",
                portionCount: 100,
                gift: ["5 мышей в подарок", "заказчик доволен"],
                weight: "5",
                status: "disabled",
                selectedText: "Филе из цыплят с трюфелями в бульоне."
            }
        ]
};

export { DATA } 