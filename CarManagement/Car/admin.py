from django.contrib import admin
from Car import models

admin.site.register(models.ShowRoomOwner)
admin.site.register(models.ShowRoom)
admin.site.register(models.Car)
admin.site.register(models.CarAssignToShowRoom)
admin.site.register(models.ShowRoomOwnerAssignToShowRoom)


