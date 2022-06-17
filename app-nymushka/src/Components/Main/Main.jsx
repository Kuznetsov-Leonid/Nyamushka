/**
 * create by Kuznetsov Leonid
 */

import React, { Component } from "react";
import { Item } from "../Card/CardItem";
import { DATA } from '../../data/data';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = DATA;
        this.toggleStatus = this.toggleStatus.bind(this);
        this.getItemIndexById = this.getItemIndexById.bind(this);
    }

    toggleStatus(id) {
        let index = this.getItemIndexById(id);
        let newItems = this.state.items;
        if (newItems[index].status !== "disabled"){
            newItems[index].status = (newItems[index].status === "notSelected") ? "selected" : "notSelected";
            this.setState({ items: newItems });
        }

    }

    getItemIndexById(id) {
        let res = -1;
        this.state.items.forEach((item, index) => {
            if (item.id === id) res = index;
        });
        return res;
    }

    render() {
        return (
            <div class="container px-2 px-xl-0">
                <div class="row mx-0">
                    <div class="col-xl-4 d-flex justify-content-center mb-4 mb-xl-0">
                        <Item item={this.state.items[0]} toggleStatus={this.toggleStatus} />
                    </div>
                    <div class="col-xl-4 col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                        <Item item={this.state.items[1]} toggleStatus={this.toggleStatus} />
                    </div>
                    <div class="col-xl-4 col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                        <Item item={this.state.items[2]} toggleStatus={this.toggleStatus} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;