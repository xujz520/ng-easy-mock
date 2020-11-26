var NgEasyMockModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Config } from './interfaces';
import { NgEasyMockInterceptor } from './ng-easy-mock.interceptor';
let NgEasyMockModule = NgEasyMockModule_1 = class NgEasyMockModule {
    static forRoot(config) {
        return {
            ngModule: NgEasyMockModule_1,
            providers: [{ provide: Config, useValue: config }]
        };
    }
};
NgEasyMockModule = NgEasyMockModule_1 = __decorate([
    NgModule({
        providers: [{ provide: HTTP_INTERCEPTORS, useClass: NgEasyMockInterceptor, multi: true }],
        declarations: [],
        imports: [
            CommonModule
        ]
    })
], NgEasyMockModule);
export { NgEasyMockModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWVhc3ktbW9jay8iLCJzb3VyY2VzIjpbImxpYi9uZy1lYXN5LW1vY2subW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBYyxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFTbkUsSUFBYSxnQkFBZ0Isd0JBQTdCLE1BQWEsZ0JBQWdCO0lBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBa0I7UUFDL0IsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUNuRCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFQWSxnQkFBZ0I7SUFQNUIsUUFBUSxDQUFDO1FBQ1IsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN6RixZQUFZLEVBQUUsRUFBRTtRQUNoQixPQUFPLEVBQUU7WUFDUCxZQUFZO1NBQ2I7S0FDRixDQUFDO0dBQ1csZ0JBQWdCLENBTzVCO1NBUFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBNb2NrQ29uZmlnLCBDb25maWcgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBOZ0Vhc3lNb2NrSW50ZXJjZXB0b3IgfSBmcm9tICcuL25nLWVhc3ktbW9jay5pbnRlcmNlcHRvcic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBOZ0Vhc3lNb2NrSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH1dLFxyXG4gIGRlY2xhcmF0aW9uczogW10sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdFYXN5TW9ja01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBNb2NrQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ0Vhc3lNb2NrTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTmdFYXN5TW9ja01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDb25maWcsIHVzZVZhbHVlOiBjb25maWcgfV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==