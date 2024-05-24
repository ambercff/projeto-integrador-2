from . import views
from django.urls import path, include
from app_smart.api.viewsets import CreateUserAPIViewSet, SensorViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.routers import DefaultRouter

router = DefaultRouter();
router.register('sensores', SensorViewSet)

urlpatterns = [
    path('', views.abre_index, name='abre_index'),
    path('api/create_user', CreateUserAPIViewSet.as_view(), name='create_user'),
    path('api/token', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include(router.urls))
    
]