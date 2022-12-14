from rest_framework.serializers import Serializer, ModelSerializer, SlugRelatedField
from rest_framework.serializers import IntegerField, CharField, DateField
from beauty.models import Category, Employee, Procedure, Salon


class RequestAvailableTimeSerializer(Serializer):

    salon_id = IntegerField()
    master_id = IntegerField()
    weekday = CharField(max_length=2)
    date = DateField(input_formats=['%Y-%m-%d'])


class RequestMastersForAppointmentDetailSerializer(Serializer):

    salon_id = IntegerField()
    category_id = IntegerField()


class EmployeeAppointmentDetailSerializer(ModelSerializer):

    class Meta:
        model = Employee
        fields = ('id', 'name', 'surname')


class ServiceAppointmentDetailSerializer(ModelSerializer):

    class Meta:
        model = Procedure
        fields = ('id', 'name', 'price')


class ServiceCategoryAppointmentDetailSerializer(ModelSerializer):
    services = ServiceAppointmentDetailSerializer(many=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'services')


class SalonAppointmentDetailSerializer(ModelSerializer):

    class Meta:
        model = Salon
        fields = ('id', 'salon_name', 'address')
