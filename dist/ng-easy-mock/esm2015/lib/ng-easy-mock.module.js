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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZy1lYXN5LW1vY2svc3JjLyIsInNvdXJjZXMiOlsibGliL25nLWVhc3ktbW9jay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBYyxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFTbkUsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQWtCO1FBQy9CLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDbkQsQ0FBQztJQUNKLENBQUM7OztZQWJGLFFBQVEsU0FBQztnQkFDUixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUN6RixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgTW9ja0NvbmZpZywgQ29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgTmdFYXN5TW9ja0ludGVyY2VwdG9yIH0gZnJvbSAnLi9uZy1lYXN5LW1vY2suaW50ZXJjZXB0b3InO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogTmdFYXN5TW9ja0ludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9XSxcclxuICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nRWFzeU1vY2tNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogTW9ja0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmdFYXN5TW9ja01vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5nRWFzeU1vY2tNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ29uZmlnLCB1c2VWYWx1ZTogY29uZmlnIH1dXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=