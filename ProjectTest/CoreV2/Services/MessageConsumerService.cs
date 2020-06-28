using Core.Contracts;
using Core.Data;
using Core.Models;
using MassTransit;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Services
{
    public class MessageConsumerService : IMessageConsumerService, IConsumer<Message>
    {
        private readonly IEmployeeService _emplyeeService;

        public MessageConsumerService(IEmployeeService emplyeeService)
        {
            _emplyeeService = emplyeeService;
        }

        public async Task Consume(ConsumeContext<Message> context)
        {
            if (context.Message.IsTimeIn)
            {
                await _emplyeeService.UpdateTimeInAsync(context.Message.UserID);
            }
            else if (context.Message.IsTimeOut)
            {
                await _emplyeeService.UpdateTimeOutAsync(context.Message.UserID);
            }
            await context.RespondAsync<Message>(new
            {
                Value = $"Received: {context.Message.UserID}" 
            });
        }
    }
}
