import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Config } from './interfaces';
import { NgEasyMockInterceptor } from './ng-easy-mock.interceptor';
export class NgEasyMockModule {
    static forRoot(config) {
        return {
            ngModule: NgEasyMockModule,
            providers: [{ provide: Config, useValue: config }]
        };
    }
}
NgEasyMockModule.decorators = [
    { type: NgModule, args: [{
                providers: [{ provide: HTTP_INTERCEPTORS, useClass: NgEasyMockInterceptor, multi: true }],
                declarations: [],
                imports: [
                    CommonModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJFOi9uZy1lYXN5LW1vY2svbmctZWFzeS1tb2NrL3Byb2plY3RzL25nLWVhc3ktbW9jay9zcmMvIiwic291cmNlcyI6WyJsaWIvbmctZWFzeS1tb2NrLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQsT0FBTyxFQUFjLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVNuRSxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBa0I7UUFDL0IsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUNuRCxDQUFDO0lBQ0osQ0FBQzs7O1lBYkYsUUFBUSxTQUFDO2dCQUNSLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3pGLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBNb2NrQ29uZmlnLCBDb25maWcgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBOZ0Vhc3lNb2NrSW50ZXJjZXB0b3IgfSBmcm9tICcuL25nLWVhc3ktbW9jay5pbnRlcmNlcHRvcic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBOZ0Vhc3lNb2NrSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH1dLFxyXG4gIGRlY2xhcmF0aW9uczogW10sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdFYXN5TW9ja01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBNb2NrQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ0Vhc3lNb2NrTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTmdFYXN5TW9ja01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDb25maWcsIHVzZVZhbHVlOiBjb25maWcgfV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==