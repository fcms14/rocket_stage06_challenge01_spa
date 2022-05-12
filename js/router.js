export class Router {
    routes = {};

    add(routeName, page) {
        this.routes[routeName] = page;
    }

    async route(event) {
        event = event || window.event;
        event.preventDefault();

        window.history.pushState({}, "", event.target.href);

        const exit = document.querySelector('.selected')
        if (exit !== null){
            exit.classList.remove('selected');
        }
        event.path[0].classList.add('selected');

        await this.handle();
    }

    async handle() {
        const { pathname } = window.location;
        const route = this.routes[pathname] || this.routes[404]
        fetch(route).then(data => data.text()).then(html => {
            document.querySelector('main').innerHTML = html;
        })
    }

}